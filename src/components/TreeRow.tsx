import {ActionIcon, CSSObject, Group, Text} from '@mantine/core'
import _ from 'lodash'

/* -- Tree Row -- */

export interface TreeRowProps {
	icon: JSX.Element
	title: string
	selected?: boolean
	onClick?: (event: React.MouseEvent) => void
	onMouseDown?: (event: React.MouseEvent) => void
}

/** A Tree row */
export const TreeRow = ({
	icon,
	title,
	selected = false,
	onClick,
	onMouseDown
}: TreeRowProps) => {
	return (
		<Group
			sx={(theme) =>
				_.merge(
					{
						gap: 8,
						borderRadius: 8,
						flexDirection: 'row',
						'&:hover': !selected
							? {
									backgroundColor: theme.colors.gray[1]
							  }
							: {},
						'&:active': {
							backgroundColor: theme.colors.blue[5]
						},
						'&:active > *': {
							color: theme.white
						}
					},
					selected
						? {
								backgroundColor: theme.colors.blue[5],
								'& > *': {color: theme.white}
						  }
						: {}
				) as CSSObject
			}
			px={4}
			py={2}
			onClick={onClick}
			onMouseDown={onMouseDown}
		>
			<ActionIcon color="gray" sx={{pointerEvents: 'none'}}>
				{icon}
			</ActionIcon>
			<Text size="md">{title}</Text>
		</Group>
	)
}
