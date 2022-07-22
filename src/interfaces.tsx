interface productData {
    name: string
    price: string
    img: string
    comment: string
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
}
export interface ProductTypesProps {
    server: serverData
    setServer: React.Dispatch<React.SetStateAction<serverData | null>>
}
export interface MobileNavbarProps {
    isMobileNavOpen: boolean
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}