export class Professional{
 name:string = "Hitler Drew"
 domain:string = 'bank.com'
 gender: string ="Female"
 countryCode: string = CountryCode.India
 dob: Date =  new Date('2022-03-25')
 location: string = 'Paris'
 phone: string = '7745678920'
}

export class User {
  profile: string = '../../assets/profile.png'
  name:string = "John Smith"
  location:string = 'CSA, CIS'
  isPremiumMember: boolean = true
  profession: string = 'Accountant'
  logo:string = ''
}

export interface MenuItems{
  label: string
  icon: string
  link: string | null
  menu:any
}


export const NavBarMenu = [
  {
    label: 'Home',
    icon: 'home',
    link: 'home',
    menu: []
  },
  {
    label: 'Trustees',
    icon: 'people',
    link: 'trustee',
    menu:[]
  },
  {
    label: 'Professional',
    icon: 'person',
    link:'professional',
    menu:[]
  },
  {
    label: 'More',
    icon: 'more_horiz',
    link: null,
    menu:[
      { icon:'contacts', title:' Contact us'},
      { icon:'location_on', title:'Address'}
    ]
  },
];

export const DateFormat =  {
  Do_MMM_YYYY :'Do MMM YYYY',
}

export const CountryCode = {
  India : '+91'
}
