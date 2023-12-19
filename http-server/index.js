let userForm = document.getElementById("form-data");

const retent = () => {
    let ent = localStorage.getItem("user-info");
    if (ent) {
        ent = JSON.parse(ent);
    } else {
        ent = [];
    }
    return ent;
};

let UserDet = retent();

const dispent = () => {
    const ent = retent();
    let tableEntries = '';
    for (const entry of ent) {
        const name_entry = `<td>${entry.name}</td>`;
        const email_entry = `<td>${entry.email}</td>`;
        const password_entry = `<td>${entry.password}</td>`;
        const dob_entry = `<td>${entry.dob}</td>`;
        const acceptTerms_entry = `<td>${entry.acceptedTermsAndConditions ? 'true' : 'false'}</td>`;

        const row = `<tr>${name_entry}${email_entry}${password_entry}${dob_entry}${acceptTerms_entry}</tr>`;
        tableEntries += row;
    }
    const table = `<table><tr><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}</table>`;
    let details = document.getElementById("user-info");
    details.innerHTML = table;
};

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndConditions = document.getElementById("accept-terms").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,
    };
    UserDet.push(entry);
    localStorage.setItem("user-info", JSON.stringify(UserDet));
    dispent();
};

userForm.addEventListener("submit", saveUserForm);
dispent();
