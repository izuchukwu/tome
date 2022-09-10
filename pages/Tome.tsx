import {Box, Group, Stack, Tabs} from '@mantine/core'
import {useEffect, useState} from 'react'
import {usePrompt} from '../components/everyprompt'
import Tiptap from '../components/Tiptap/Tiptap'
import {TomeBar} from './tome-components/TomeBar'
import {TomeNav} from './tome-components/TomeNav'
import {TomePrompt} from './tome-components/TomePrompt'
import {TomeBlockData, TomeBlockType, TomePage} from './tome-types'
import {decode} from 'html-entities'

interface TomeProps {
	tomeID: string
}

const Tome = ({tomeID}: TomeProps) => {
	const [navBlocks, setNavBlocks] = useState<TomeBlockData[]>([
		{type: TomeBlockType.Search, id: 'a'},
		{type: TomeBlockType.Space, settings: {width: 'grow'}, id: 'b'},
		{
			type: TomeBlockType.Button,
			settings: {
				buttonType: 'regular',
				url: 'https://google.com',
				title: 'Sign Up'
			},
			id: 'c'
		},
		{
			type: TomeBlockType.Button,
			settings: {
				buttonType: 'link',
				url: 'https://twitter.com',
				title: 'Learn More'
			},
			id: 'd'
		}
	])
	const [barBlocks, setBarBlocks] = useState<TomeBlockData[]>([
		{
			type: TomeBlockType.BarButton,
			settings: {
				buttonType: 'link',
				url: 'https://google.com',
				title: 'Getting Started',
				icon: 'StarFilled'
			},
			id: 'c'
		},
		{
			type: TomeBlockType.BarButton,
			settings: {
				buttonType: 'link',
				url: 'https://google.com',
				title: 'Theming',
				icon: 'ColorWheel'
			},
			id: 'd'
		}
	])
	const [pages] = useState<TomePage[]>()
	const [content, setContent] = useState('<h1>Hello</h1>')

	const {completion, duration, error, isLoading, setVariables} =
		usePrompt('tome')

	const onWrite = (prompt: string) => {
		setVariables({
			content,
			prompt
		})
	}

	useEffect(() => {
		if (completion) setContent(decode(completion))
	}, [completion])

	return (
		<Stack align="center">
			<Stack sx={{maxWidth: 1450, width: '100%'}}>
				<TomeNav
					blocks={navBlocks}
					settings={{showSeparatorOnScrollOnly: true}}
					onEditBlocks={setNavBlocks}
				/>
			</Stack>
			<Group align="top" p={20} sx={{width: 700}}>
				<Tiptap content={content} onUpdate={setContent} />
			</Group>
			<Box
				sx={{
					position: 'absolute',
					marginBottom: 30,
					marginLeft: 30,
					left: 0,
					bottom: 0,
					height: 300,
					width: 'calc(100% - 60px)'
				}}
			>
				<TomePrompt isLoading={isLoading} onWrite={onWrite} />
			</Box>
		</Stack>
	)
}

export default Tome

{
	/* <Group align="top" p={20}>
					<Tabs
						keepMounted={false}
						defaultValue="p1"
						orientation="vertical"
						variant="pills"
						color="dark"
					>
						<Tabs.List sx={{minWidth: 200}} mr={100}>
							<Tabs.Tab value="p1">Page 1</Tabs.Tab>
							<Tabs.Tab value="p2">Page 2</Tabs.Tab>
						</Tabs.List>

						<Tabs.Panel value="p1">
							<Tiptap content="<h1>First</h1>" />
						</Tabs.Panel>
						<Tabs.Panel value="p2">
							<Tiptap content="<h1>Second</h1>" />
						</Tabs.Panel>
						<Tabs.Panel value="p3">
							<Tiptap content="<h1>Third</h1>" />
						</Tabs.Panel>
					</Tabs>
				</Group> */
}

{
	/* <Group align="top" p={20}>
					
					<Stack sx={{width: 350}}>
						<TomeBar
							blocks={barBlocks}
							settings={{}}
							onEditBlocks={setBarBlocks}
						/>
					</Stack>
					<Stack sx={{flexGrow: 1, width: 1}}>
						<Tiptap content="<h1>Hello</h1>" />
					</Stack>
				</Group> */
}
