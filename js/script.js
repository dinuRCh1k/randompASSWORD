const button = document.querySelector('.button');
const wrapperText = document.querySelector('.wrapper_text');

button.addEventListener('click', randomPassword);

function randomPassword(length) {
    const symbol = 'ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop1234567890';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += symbol.charAt(Math.floor(Math.random() * symbol.length));
    }
    wrapperText.textContent = `Рандомный пароль: ${password}`;
    return password;
}