export interface animation {
    text: {animation: string}
    image: {animation: string}
}
export interface productData {
    name: string
    price: string
    img: string
    comment: string
    bestSeller: boolean
}
export interface serverData {
    oils: productData[]
    cosmetics: productData[]
    diffusers: productData[]
    aromatherapy: productData[]
}
export interface HomeProps {
    server: serverData
    setServer: React.Dispatch<React.SetStateAction<serverData | null>>
    darkMode: boolean
}
export interface AdvertisementProps {
    darkMode: boolean
}
export interface ProductTypesProps {
    server: serverData
    setServer: React.Dispatch<React.SetStateAction<serverData | null>>
    activeBox: number
    setActiveBox: React.Dispatch<React.SetStateAction<number>>
    handleTypeBoxClick: (el: string, index: number) => void
    darkMode: boolean
}
export interface BestSellerProps {
    server: serverData | any
    setServer: React.Dispatch<React.SetStateAction<serverData | null>>
    activeBox: number
    componentType: string
    style: animation
    darkMode: boolean
}
export interface SoapsProps {
    darkMode: boolean
}
export interface CollectionProps {
    darkMode: boolean
}
export interface NavbarProps {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
export interface MobileNavbarProps {
    isMobileNavOpen: boolean
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
export interface FooterProps {
    darkMode: boolean
}