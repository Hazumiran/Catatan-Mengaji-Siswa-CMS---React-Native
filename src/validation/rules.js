export default validationRule = {
    email: {
        presence: {
            allowEmpty: false,
            message: '^Email tidak boleh kosong'
        },
        email: {
            message: '^Email tidak valid'
        }
    },
    general: {
        presence: {
            allowEmpty: false,
            message: '^Field tidak boleh kosong'
        }
    },
    phoneNumber: {
        presence: {
            allowEmpty: false,
            message: '^Nomor telefon tidak boleh kosong'
        },
        format: {
            pattern: /^[\s\./0-9]*$/
        }
    },
    password: {
        presence: {
          allowEmpty: false,
          message: "^Password tidak boleh kosong"
        },
        format:{
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message: "^Password harus memiliki satu huruf besar, angka, dan karakter spesial(@$!%*#?&)"
        },
        length: {
          minimum: 8,
          message: "^Password harus memiliki satu huruf besar, angka, dan karakter spesial"
        }
    },
    passwordLogin: {
        presence: {
          allowEmpty: false,
          message: "^Password tidak boleh kosong"
        },
        length: {
          minimum: 8,
          message: "^Password minimal 8 karakter"
        }
    },
    }