import Tree, {RenderItemParams} from '@atlaskit/tree'
import {Box, Group, Paper, Select, Stack, Text} from '@mantine/core'
import {FileIcon} from '@radix-ui/react-icons'
import type {NextPage} from 'next'
import Head from 'next/head'
import {useState} from 'react'
import {EmojiFavi} from '../src/components/EmojiFavi'
import {TreeRow} from '../src/components/TreeRow'
import styles from '../styles/Home.module.css'
import Tome from '../src/tome/Tome'

const Home: NextPage = () => {
	const [tomes, setTome] = useState([
		'Warp Docs',
		'Warp Guides',
		'Index Docs',
		'Chorus Docs',
		'+ New Tome'
	])

	return (
		<div className={styles.container}>
			<Head>
				<title>Tome</title>
				<meta
					name="description"
					content="Magic docs, guides, and books"
				/>
				<EmojiFavi emoji="🪄" />
			</Head>

			<Stack p={15} sx={{height: '100vh'}}>
				<Group>
					<Text sx={{fontWeight: 600}}>🪄 Tome</Text>
					<Select
						data={tomes}
						value={'Warp Docs'}
						variant="filled"
						radius="md"
						size="xs"
					/>
				</Group>
				<Box sx={{flexGrow: 1, height: 1}}>
					<Tome tomeID="warp" />
				</Box>
			</Stack>
		</div>
	)
}

export default Home
