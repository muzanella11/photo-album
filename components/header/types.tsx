export interface IHeaderProps {
    entries?: Array<IHeaderEntries>
}

export interface IHeaderEntries {
    name?: string
    label?: string
    url?: string
}

export interface IHeaderState {
    accountMenus?: Array<IHeaderMenus>
}

export interface IHeaderMenus {
    name?: string
    label?: string
    url?: string
}