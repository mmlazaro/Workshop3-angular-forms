export class FormModel {
    constructor(
        public email = '',
        public firstName = '',
        public lastName = '',
        public street = '',
        public city = '',
        public confirmed = false,
        public comment = ''
    ) { }
}
