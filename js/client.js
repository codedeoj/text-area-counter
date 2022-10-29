const comment = document.querySelector('textarea');
const characters = document.querySelector('.counter');

const limit = comment.getAttribute('maxlength');

comment.addEventListener('input',function(){
  characters.innerHTML = `Characters: ${comment.value.length} / ${limit}`;
});