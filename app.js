document.querySelector ('.card_form').addEventListener ('submit', handleSubmit);
const inputEmail = document.getElementById ('card_input-email');


function handleSubmit (e)
{
    e.preventDefault ();

    inputEmail.classList.remove ('invalid');
    if (!isEmail (inputEmail.querySelector('.card_input').value))
    {
        inputEmail.classList.add ('invalid');
        return;
    }
}


function isEmail (val)
{
    const regexp = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    return val.match (regexp);
}