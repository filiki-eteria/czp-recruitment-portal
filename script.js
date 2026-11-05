'use strict';
const $ = (selector) => document.querySelector(selector);
const make = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
const allowedStatuses = ['DESIGNED','PROTOTYPED','IMPLEMENTED'];
function renderCases(cases) {
  const grid = $('#case-grid'); grid.replaceChildren();
  for (const item of cases) {
    const card = make('article','case-card');
    const top = make('div','case-top');
    top.append(make('span','case-id',`${item.number} // DESIGN CASE`));
    const status = allowedStatuses.includes(item.status) ? item.status : 'DESIGNED';
    top.append(make('span',`case-status ${status.toLowerCase()}`,status));
    card.append(top,make('h3','',item.name));
    const challenge = make('p','case-line'); challenge.append(make('strong','','CHALLENGE'),document.createTextNode(item.challenge));
    const decision = make('p','case-line'); decision.append(make('strong','','DECISION'),document.createTextNode(item.decision));
    card.append(challenge,decision);
    if (
      item.hasMedia === true &&
      typeof item.media === 'string' &&
      /^assets\/[a-zA-Z0-9/_-]+\.(webm|mp4)$/.test(item.media)
    ) {
      const media = make('div', 'case-media');
      const video = make('video');

      video.src = item.media;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = true;
      video.preload = 'metadata';

      video.setAttribute(
        'aria-label',
        `${item.name} gameplay demonstration`
      );

      media.append(video);
      card.append(media);
    }
    const focus = make('div','case-focus'); for (const word of item.focus || []) focus.append(make('span','',word)); card.append(focus);
    grid.append(card);
  }
}
function renderRoadmap(items) {
  const roadmap = $('#roadmap'); roadmap.replaceChildren();
  const done = items.filter(item => item.completed === true).length;
  const percent = items.length ? Math.round(done / items.length * 100) : 0;
  $('#progress-label').textContent = `${done} / ${items.length} MILESTONES COMPLETE`;
  $('#progress-fill').style.width = `${percent}%`;
  $('#progress-track').setAttribute('aria-valuenow',String(percent));
  items.forEach((item,i) => {
    const node = make('div',`roadmap-item${item.completed ? ' done' : ''}`);
    node.append(make('span','step',`PHASE ${String(i+1).padStart(2,'0')}`));
    const milestone = make('span','milestone'); milestone.append(make('span','mark',item.completed ? '✓' : '○'),document.createTextNode(item.name)); node.append(milestone); roadmap.append(node);
  });
}
function renderLocations(locations) {
  const container = $('#locations');
  container.replaceChildren();

  const allowed = ['PENDING', 'IN PROGRESS', 'COMPLETED'];

  for (const location of locations) {
    const status = allowed.includes(location.status)
      ? location.status
      : 'PENDING';

    const card = make('div', 'location-card');

    card.append(
      make('div', 'location-name', location.name),
      make('div', 'location-description', location.description),
      make(
        'div',
        `location-status ${status.toLowerCase().replaceAll(' ', '-')}`,
        status
      )
    );

    container.append(card);
  }
}
function updateTerminal(logs) {
  const terminal = $('#terminal-output');
  const count = logs.length;

  terminal.replaceChildren();

  const lines = [
    'ACCESS GRANTED',
    'TRAINING SIMULATION: IN DEVELOPMENT',
    `TRANSMISSIONS FOUND: ${String(count).padStart(2, '0')}`,
    count > 0
      ? 'ARCHIVE SYNCHRONIZED'
      : 'AWAITING NEW RECORDS'
  ];

  for (const line of lines) {
    terminal.append(
      document.createTextNode(`> ${line}`),
      document.createElement('br')
    );
  }
}
function renderLogs(logs) {
  const container = $('#logs'); container.replaceChildren();
  if (!logs.length) {
    container.append(
      make('p', 'loading', 'NO DEVELOPMENT RECORDS AVAILABLE YET_')
    );
    return;
  }
  for (const log of logs) {
    const article = make('article','log-item'); article.append(make('div','log-tag',`${log.tag}${log.date ? ' // '+log.date : ''}`),make('h3','',log.title),make('p','',log.summary));
    if (log.body) { const details = make('details'); details.append(make('summary','','READ TRANSMISSION +'),make('p','log-body',log.body)); article.append(details); }
    container.append(article);
  }
}
async function init() {
  $('#year').textContent = new Date().getFullYear();
  try {
    const response = await fetch('data/content.json',{cache:'no-store'});
    if (!response.ok) throw new Error('Could not load project data');
    const data = await response.json();
    renderCases(data.cases || []); renderRoadmap(data.roadmap || []); renderLocations(data.locations || []); renderLogs(data.logs || []); updateTerminal(data.logs || []);
    const github = data.project?.githubUrl;
    if (github && /^https:\/\/github\.com\//.test(github)) $('#github-link').href = github; else $('#github-link').hidden = true;
    const demo = data.project?.demoUrl;
    if (demo && /^https:\/\//.test(demo)) { const access = $('#access-training'); access.href = demo; access.setAttribute('target','_blank'); access.setAttribute('rel','noopener noreferrer'); }
  } catch (error) {
    $('#case-grid').replaceChildren(make('p','error','DESIGN RECORDS OFFLINE — RUN THROUGH A LOCAL WEB SERVER.'));
    $('#roadmap').replaceChildren(make('p','error','ROADMAP DATA UNAVAILABLE.'));
    $('#logs').replaceChildren(make('p','error','TRANSMISSION ARCHIVE OFFLINE.'));
    $('#progress-label').textContent = 'OFFLINE';
    console.error(error);
  }
}
init();
