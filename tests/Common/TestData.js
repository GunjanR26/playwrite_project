export class testData {

    static checkoutCustomerDetils =
        {
            Email: 'test@example.com',
            FirstName: 'Gunjan',
            LastName: 'Ranparia',
            PhoneNumber: '+1234567890',


        }

    static checkoutDeliveryDetails =
        {
            Address: '123 William',
            AddressOption: 'William Street, New York, NY, USA',
            CompanyName: 'Inevitable Info tech',
            AddressLine2: 'Test'
        }

    static validLoginDetails =
        {
            validEmail: 'stero26@gmail.com',
            validPassword: '123456',
        }

    static blankLoginDetails =
        {
            blankEmail: '',
            blankPassword: '',
        }

    static invalidLoginDetails =
        {
            invalidEmail: 'test@example.com',
            invalidPassword: '654321',
        }
    static invalidformat =
    {
        invaidEmailformat: 'test@example',
    }

    static leadingtrailingSpace =
    {
        leadingtrailingSpaceEmail: '  stero26@gmail.com  ',
        leadingtrailingSpacePassword: ' 123456  ',
    }
    
    static middleSpace =
    {
        middleSpaceEmail: 'stero 26@gmail .com',
        middleSpacePassword: '123 456',
    }

    static validSignUpDetails =
    {
        validUnregisteredEmail: 'test1@example.com',
        validUnregisteredPassword: '123456',
    }
    

}