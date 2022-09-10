import {ActionIcon, Box, Button, Group, Menu} from '@mantine/core'
import {TomeBlockData, TomeBlockType} from '../tome-types'
import {DropResult} from 'react-beautiful-dnd'
import {Reorder} from 'framer-motion'
import {TomeBlock} from './TomeBlock'
import {
	ButtonIcon,
	ColumnSpacingIcon,
	Link1Icon,
	PlusIcon
} from '@radix-ui/react-icons'
import {nanoid} from 'nanoid'

type TomeNavProps = {
	blocks: TomeBlockData[]
	settings: {
		showSeparatorOnScrollOnly: boolean
	}

	onEditBlocks: (blocks: TomeBlockData[]) => void
}

export const TomeNav = ({blocks, settings, onEditBlocks}: TomeNavProps) => {
	const onAddBlock = (block: TomeBlockData) => {
		onEditBlocks([...blocks, block])
	}

	return (
		<Group
			p={20}
			sx={{
				position: 'relative',
				height: 'fit-content'
			}}
			align="center"
			className="blockArea"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M24 0C17.3726 0 12 5.37258 12 12H24V0Z" fill="black" />
				<path
					d="M0 24C6.62742 24 12 18.6274 12 12H0V24Z"
					fill="black"
				/>
			</svg>

			<Reorder.Group
				axis="x"
				values={blocks}
				onReorder={onEditBlocks}
				as="div"
				style={{flexGrow: 1, width: 1}}
			>
				<Group sx={{width: '100%'}}>
					{blocks.map((block, i) => (
						<TomeBlock block={block} key={block.id} />
					))}
				</Group>
			</Reorder.Group>

			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon
						variant="filled"
						color="blue"
						sx={{
							position: 'absolute',
							right: -10
						}}
						radius="xl"
						size="sm"
						className="showOnBlockAreaHover"
					>
						<PlusIcon />
					</ActionIcon>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>Add Block</Menu.Label>
					<Menu.Item
						icon={<ButtonIcon />}
						onClick={() =>
							onAddBlock({
								id: nanoid(),
								type: TomeBlockType.Button,
								settings: {
									buttonType: 'regular',
									title: 'New Button',
									url: 'https://google.com'
								}
							})
						}
					>
						Button
					</Menu.Item>
					<Menu.Item
						icon={<Link1Icon />}
						onClick={() =>
							onAddBlock({
								id: nanoid(),
								type: TomeBlockType.Button,
								settings: {
									buttonType: 'link',
									title: 'New Button',
									url: 'https://google.com'
								}
							})
						}
					>
						Link
					</Menu.Item>
					<Menu.Item
						icon={<ColumnSpacingIcon />}
						onClick={() =>
							onAddBlock({
								id: nanoid(),
								type: TomeBlockType.Space,
								settings: {
									width: 100
								}
							})
						}
					>
						Space
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Group>
	)
}
