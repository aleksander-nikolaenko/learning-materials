const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder')

let item = items[0];

document.addEventListener('mousedown', clickitem)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function clickitem(event) {
  if (!event.target.classList.contains('item'))
    return;
  item = event.target;
  item.addEventListener('dragstart', dragstart);
  item.addEventListener('dragend',dragend);
}

function dragstart(event) {
  event.target.classList.add('hold')
setTimeout(()=>{event.target.classList.add('hide')}, 0)
  
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
  event.preventDefault();

}

function dragenter(event) {
   if (!event.target.classList.contains('placeholder'))
    return;
  event.target.classList.add('hovered');

}

function dragleave(event) {
event.target.classList.remove('hovered');
}

function dragdrop(event) {
  item.classList.remove('hold', 'hide');
  if (!event.target.classList.contains('placeholder'))
    return;
  event.target.append(item);
  event.target.classList.remove('hovered');
  item.removeEventListener('dragstart', dragstart);
  item.removeEventListener('dragend',dragend);
}