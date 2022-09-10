import {Button, Group, Paper, Textarea} from '@mantine/core'
import {useState} from 'react'

type TomePromptProps = {
	isLoading?: boolean
	onWrite?: (prompt: string) => void
}

export const TomePrompt = ({isLoading, onWrite}: TomePromptProps) => {
	const [prompt, setPrompt] = useState('')

	return (
		<Paper radius="md" withBorder sx={{width: '100%', height: '100%'}}>
			<Group sx={{width: '100%', height: '100%'}} pr={30} align="start">
				<Textarea
					placeholder="What do you need?"
					variant="unstyled"
					autosize={false}
					sx={{flexGrow: 1}}
					styles={(theme) => ({
						wrapper: {height: '100%'},
						input: {height: '100%', fontSize: 20},
						root: {height: '100%'}
					})}
					mt={10}
					ml={20}
					onChange={(event) => setPrompt?.(event.currentTarget.value)}
					value={prompt}
				/>
				<Button
					color="dark"
					loading={isLoading}
					onClick={() => onWrite?.(prompt)}
					mt={30}
				>
					Write
				</Button>
			</Group>
		</Paper>
	)
}

//Explain the new methods we're using to fight climate change across climate policy, climate adaptation, and climate resilience
