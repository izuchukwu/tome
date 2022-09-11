import {useEditor, EditorContent, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import React, {useEffect} from 'react'

type TipTapProps = {
	content: string
	onUpdate?: (html: string) => void
	style?: React.CSSProperties
}

const Tiptap = ({content, onUpdate, style}: TipTapProps) => {
	const editor = useEditor({
		extensions: [StarterKit, Highlight, Link, Underline],
		content: content,
		autofocus: true,
		onUpdate: ({editor}) => {
			onUpdate?.(editor.getHTML())
		}
	})

	useEffect(() => {
		editor?.commands.setContent(content)
	}, [content, editor])

	return (
		<div className="TipTap" style={style}>
			{editor && (
				<BubbleMenu editor={editor} tippyOptions={{duration: 100}}>
					<button
						onClick={() =>
							editor.chain().focus().toggleBold().run()
						}
						className={editor.isActive('bold') ? 'is-active' : ''}
					>
						bold
					</button>
					<button
						onClick={() =>
							editor.chain().focus().toggleItalic().run()
						}
						className={editor.isActive('italic') ? 'is-active' : ''}
					>
						italic
					</button>
					<button
						onClick={() =>
							editor.chain().focus().toggleStrike().run()
						}
						className={editor.isActive('strike') ? 'is-active' : ''}
					>
						strike
					</button>
					<button
						onClick={() =>
							editor.chain().focus().toggleHighlight().run()
						}
						className={editor.isActive('strike') ? 'is-active' : ''}
					>
						highlight
					</button>
					<button
						onClick={() =>
							editor.chain().focus().toggleUnderline().run()
						}
						className={editor.isActive('strike') ? 'is-active' : ''}
					>
						underline
					</button>
				</BubbleMenu>
			)}
			<EditorContent editor={editor} />
		</div>
	)
}

export default Tiptap
