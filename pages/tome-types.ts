import {TreeIconType} from './tome-components/TreeIcon'

export enum TomeBlockType {
	Search = 'search',
	Space = 'space',
	Link = 'link',
	Button = 'button',
	BarButton = 'barButton',
	SectionHeader = 'sectionHeader'
}

export type TomeBlockData = {id: string} & (
	| {
			type: TomeBlockType.Search
	  }
	| {
			type: TomeBlockType.Space
			settings: {
				width: 'grow' | number
			}
	  }
	| {
			type: TomeBlockType.Button
			settings: {
				buttonType: 'regular' | 'link'
				title: string
				url: string
			}
	  }
	| {
			type: TomeBlockType.BarButton
			settings: {
				buttonType: 'regular' | 'link'
				title: string
				url: string
				icon?: TreeIconType
			}
	  }
	| {
			type: TomeBlockType.SectionHeader
			settings: {
				title: string
			}
	  }
)

export type TomePage = {
	coverPhotoURL: string
	content: string
}

export type Tomefile = {
	nav: TomeBlockData[]
	sidebar: TomeBlockData[]
	pages: Record<string, TomePage>
}
