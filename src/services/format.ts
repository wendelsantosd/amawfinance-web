const format = {
    phone: (phone: string | undefined) =>
        phone ? phone
            ?.replace(/\D/g, '')
            .replace(/(\d{11})(\d)/, '$1')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            : ''
    ,

    cpf: (cpf: string | undefined) =>
        cpf ? cpf
            ?.replace(/\D/g, '')
            .replace(/(\d{11})(\d)/, '$1')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            : ''
    ,

    date: (date: string) => {
        try {
            const newDate = date?.split('T')

            const splitedDate = newDate[0].split('-')

            return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`
        } catch (err: any) {
            console.log(err.message)
        }
    },
    
    getOnlyNumbers: (input: string): string =>
        input?.replace(/\D/g, '')
    ,
}

export default format