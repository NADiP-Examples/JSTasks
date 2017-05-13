function sendData(form) {
    console.log('form = ', JSON.stringify($(form).serializeArray()));
    return false
}

function addPhone() {
    console.log('add Phone');
//    ...
}

function removePhone(phone) {
    console.log('Remove phone -->', phone);

    // TODO: Пример удаления телефона
    // phone.remove();
}