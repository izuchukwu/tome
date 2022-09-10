import {
	ActionIcon,
	Autocomplete,
	Box,
	Button,
	Divider,
	Group,
	UnstyledButton
} from '@mantine/core'
import {MagnifyingGlassIcon, PlusIcon} from '@radix-ui/react-icons'
import {Reorder} from 'framer-motion'
import _ from 'lodash'
import {TomeBlockData, TomeBlockType} from '../tome-types'
import {TreeIcon} from './TreeIcon'

type TomeBlock = {block: TomeBlockData}

export const TomeBlock = ({block}: TomeBlock) => {
	return (
		<>
			{block.type === TomeBlockType.Search && (
				<Reorder.Item key={block.id} value={block} as="div">
					<Autocomplete
						placeholder="Search"
						size="xs"
						sx={{width: 250, pointerEvents: 'none'}}
						icon={<MagnifyingGlassIcon />}
						data={[
							'React',
							'Angular',
							'Vue',
							'Next.js',
							'Riot.js',
							'Svelte',
							'Blitz.js'
						]}
						radius="md"
					/>
				</Reorder.Item>
			)}
			{block.type === TomeBlockType.Space && (
				<Reorder.Item
					key={block.id}
					value={block}
					as="div"
					style={{
						alignSelf: 'stretch',
						width: _.isNumber(block.settings.width)
							? block.settings.width
							: undefined,
						flexGrow:
							block.settings.width === 'grow' ? 1 : undefined,
						// @ts-ignore
						['--block-area-hover-opacity']: 0.5
					}}
					className="showOnBlockAreaHover"
				>
					<Divider
						label="Space"
						labelPosition="center"
						sx={{
							height: '100%',
							pointerEvents: 'none',
							transform: 'translateY(-3px)'
						}}
						styles={{label: {height: '100%'}}}
					/>
				</Reorder.Item>
			)}
			{block.type === TomeBlockType.Button && (
				<Reorder.Item key={block.id} value={block} as="div">
					<Button
						component="a"
						target="_blank"
						rel="noopener noreferrer"
						href={block.settings.url}
						sx={{pointerEvents: 'none'}}
						size="sm"
						variant={
							block.settings.buttonType === 'link'
								? 'subtle'
								: undefined
						}
						styles={{inner: {alignItems: 'flex-start'}}}
					>
						{block.settings.title}
					</Button>
				</Reorder.Item>
			)}
			{block.type === TomeBlockType.BarButton && (
				<Reorder.Item key={block.id} value={block} as="div">
					<UnstyledButton
						component="a"
						target="_blank"
						rel="noopener noreferrer"
						href={block.settings.url}
						sx={{pointerEvents: 'none'}}
					>
						<Group sx={{gap: 10}}>
							{block.settings.icon && (
								<ActionIcon
									size="md"
									variant="filled"
									radius="xl"
								>
									<TreeIcon icon={block.settings.icon} />
								</ActionIcon>
							)}

							{block.settings.title}
						</Group>
					</UnstyledButton>
				</Reorder.Item>
			)}
		</>
	)
}
