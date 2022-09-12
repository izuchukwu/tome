import Tree, {RenderItemParams} from '@atlaskit/tree'
import {ActionIcon, Box, Group, Paper, Select, Stack, Text} from '@mantine/core'
import {FileIcon, ReloadIcon} from '@radix-ui/react-icons'
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
	const [undoFlag, setUndoFlag] = useState(0)
	const [redoFlag, setRedoFlag] = useState(0)

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
				<Group position="apart">
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
					<Group>
						<ActionIcon onClick={() => setUndoFlag((f) => f + 1)}>
							<Box sx={{transform: 'scale(-1, 1)'}}>
								<ReloadIcon />
							</Box>
						</ActionIcon>
						<ActionIcon onClick={() => setRedoFlag((f) => f + 1)}>
							<Box>
								<ReloadIcon />
							</Box>
						</ActionIcon>
					</Group>
				</Group>
				<Box sx={{flexGrow: 1, height: 1}}>
					<Tome
						tomeID="warp"
						undoFlag={undoFlag}
						redoFlag={redoFlag}
					/>
				</Box>
			</Stack>
		</div>
	)
}

export default Home
