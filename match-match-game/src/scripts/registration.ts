export function registration(): void {
  const bodyElem = document.body;

  const coverArea: any = document.querySelector('.cover');

  const formELem: any = bodyElem.querySelector('.form-register');
  const btnRegister: any = bodyElem.querySelector('.register-btn');
  const btnAddUser: any = bodyElem.querySelector('.btn-add');
  const btnCancel: any = bodyElem.querySelector('.btn-cancel');
  const firstName: any = document.getElementById('first-name');
  const lastName: any = document.getElementById('last-name');
  const email: any = document.getElementById('email');
  const validateBoxes = formELem.querySelectorAll('.validate-box');

  const validate = () => {
    if (firstName.validity.valid) {
      validateBoxes[0].classList.add('valid');
    } else {
      validateBoxes[0].classList.remove('valid');
    }
    if (lastName.validity.valid) {
      validateBoxes[1].classList.add('valid');
    } else {
      validateBoxes[1].classList.remove('valid');
    }
    if (email.validity.valid) {
      validateBoxes[2].classList.add('valid');
    } else {
      validateBoxes[2].classList.remove('valid');
    }

    if (
      firstName.validity.valid &&
      lastName.validity.valid &&
      email.validity.valid
    ) {
      btnAddUser.classList.remove('invalid');
    } else {
      btnAddUser.classList.add('invalid');
    }
  };

  btnRegister.addEventListener('click', () => {
    bodyElem.classList.add('notScrolled');
    coverArea.classList.remove('hidden');
    formELem.classList.remove('hidden');
  });

  coverArea.addEventListener('click', () => {
    bodyElem.classList.remove('notScrolled');
    coverArea.classList.add('hidden');
    formELem.classList.add('hidden');
  });

  btnAddUser.addEventListener('click', () => {
    if (btnAddUser.classList.contains('invalid')) {
      return;
    }
    bodyElem.classList.remove('notScrolled');
    coverArea.classList.add('hidden');
    formELem.classList.add('hidden');
  });

  firstName.addEventListener('input', () => validate());
  lastName.addEventListener('input', () => validate());
  email.addEventListener('input', () => validate());

  btnCancel.addEventListener('click', () => {
    btnAddUser.classList.add('invalid');
    validateBoxes.forEach((b: any) => b.classList.remove('valid'));
  });
}