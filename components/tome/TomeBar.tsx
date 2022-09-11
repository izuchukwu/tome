import {Group, Stack} from '@mantine/core'
import {Reorder} from 'framer-motion'
import {TomeBlockData} from '../../pages/tome-types'
import {TomeBlock} from './TomeBlock'

type TomeBarProps = {
	blocks: TomeBlockData[]
	settings: {}

	onEditBlocks: (blocks: TomeBlockData[]) => void
}

export const TomeBar = ({blocks, settings, onEditBlocks}: TomeBarProps) => {
	return (
		<Reorder.Group
			axis="y"
			values={blocks}
			onReorder={onEditBlocks}
			as="div"
		>
			<Stack sx={{gap: 15}}>
				{blocks.map((block, i) => (
					<TomeBlock block={block} key={block.id} />
				))}
			</Stack>
		</Reorder.Group>
	)
}
