import React from 'react'
import {Center} from '@mantine/core'
import Image from 'next/image'
import {
	AccessibilityIcon,
	ActivityLogIcon,
	AlignBaselineIcon,
	AlignBottomIcon,
	AlignCenterHorizontallyIcon,
	AlignCenterVerticallyIcon,
	AlignLeftIcon,
	AlignRightIcon,
	AlignTopIcon,
	AllSidesIcon,
	AngleIcon,
	ArchiveIcon,
	ArrowBottomLeftIcon,
	ArrowBottomRightIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowTopLeftIcon,
	ArrowTopRightIcon,
	ArrowUpIcon,
	AspectRatioIcon,
	AvatarIcon,
	BackpackIcon,
	BadgeIcon,
	BarChartIcon,
	BellIcon,
	BlendingModeIcon,
	BookmarkIcon,
	BookmarkFilledIcon,
	BorderAllIcon,
	BorderBottomIcon,
	BorderDashedIcon,
	BorderDottedIcon,
	BorderLeftIcon,
	BorderNoneIcon,
	BorderRightIcon,
	BorderSolidIcon,
	BorderSplitIcon,
	BorderStyleIcon,
	BorderTopIcon,
	BorderWidthIcon,
	BoxIcon,
	BoxModelIcon,
	ButtonIcon,
	CalendarIcon,
	CameraIcon,
	CardStackIcon,
	CardStackMinusIcon,
	CardStackPlusIcon,
	CaretDownIcon,
	CaretLeftIcon,
	CaretRightIcon,
	CaretSortIcon,
	CaretUpIcon,
	ChatBubbleIcon,
	CheckIcon,
	CheckCircledIcon,
	CheckboxIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	CircleIcon,
	CircleBackslashIcon,
	ClipboardIcon,
	ClipboardCopyIcon,
	ClockIcon,
	CodeIcon,
	CodeSandboxLogoIcon,
	ColorWheelIcon,
	ColumnSpacingIcon,
	ColumnsIcon,
	CommitIcon,
	Component1Icon,
	Component2Icon,
	ComponentBooleanIcon,
	ComponentInstanceIcon,
	ComponentNoneIcon,
	ComponentPlaceholderIcon,
	ContainerIcon,
	CookieIcon,
	CopyIcon,
	CornerBottomLeftIcon,
	CornerBottomRightIcon,
	CornerTopLeftIcon,
	CornerTopRightIcon,
	CornersIcon,
	CountdownTimerIcon,
	CounterClockwiseClockIcon,
	CropIcon,
	Cross1Icon,
	Cross2Icon,
	CrossCircledIcon,
	Crosshair1Icon,
	Crosshair2Icon,
	CrumpledPaperIcon,
	CubeIcon,
	CursorArrowIcon,
	CursorTextIcon,
	DashIcon,
	DashboardIcon,
	DesktopIcon,
	DimensionsIcon,
	DiscIcon,
	DiscordLogoIcon,
	DividerHorizontalIcon,
	DividerVerticalIcon,
	DotIcon,
	DotFilledIcon,
	DotsHorizontalIcon,
	DotsVerticalIcon,
	DoubleArrowDownIcon,
	DoubleArrowLeftIcon,
	DoubleArrowRightIcon,
	DoubleArrowUpIcon,
	DownloadIcon,
	DragHandleDots1Icon,
	DragHandleDots2Icon,
	DragHandleHorizontalIcon,
	DragHandleVerticalIcon,
	DrawingPinIcon,
	DrawingPinFilledIcon,
	DropdownMenuIcon,
	EnterIcon,
	EnterFullScreenIcon,
	EnvelopeClosedIcon,
	EnvelopeOpenIcon,
	EraserIcon,
	ExclamationTriangleIcon,
	ExitIcon,
	ExitFullScreenIcon,
	ExternalLinkIcon,
	EyeClosedIcon,
	EyeNoneIcon,
	EyeOpenIcon,
	FaceIcon,
	FigmaLogoIcon,
	FileIcon,
	FileMinusIcon,
	FilePlusIcon,
	FileTextIcon,
	FontBoldIcon,
	FontFamilyIcon,
	FontItalicIcon,
	FontRomanIcon,
	FontSizeIcon,
	FontStyleIcon,
	FrameIcon,
	FramerLogoIcon,
	GearIcon,
	GitHubLogoIcon,
	GlobeIcon,
	GridIcon,
	GroupIcon,
	Half1Icon,
	Half2Icon,
	HamburgerMenuIcon,
	HandIcon,
	HeadingIcon,
	HeartIcon,
	HeartFilledIcon,
	HeightIcon,
	HobbyKnifeIcon,
	HomeIcon,
	IconJarLogoIcon,
	IdCardIcon,
	ImageIcon,
	InfoCircledIcon,
	InputIcon,
	InstagramLogoIcon,
	KeyboardIcon,
	LapTimerIcon,
	LaptopIcon,
	LayersIcon,
	LayoutIcon,
	LetterCaseCapitalizeIcon,
	LetterCaseLowercaseIcon,
	LetterCaseToggleIcon,
	LetterCaseUppercaseIcon,
	LetterSpacingIcon,
	LightningBoltIcon,
	LineHeightIcon,
	Link1Icon,
	Link2Icon,
	LinkBreak1Icon,
	LinkBreak2Icon,
	LinkNone1Icon,
	LinkNone2Icon,
	LinkedInLogoIcon,
	ListBulletIcon,
	LockClosedIcon,
	LockOpen1Icon,
	LockOpen2Icon,
	LoopIcon,
	MagicWandIcon,
	MagnifyingGlassIcon,
	MarginIcon,
	MaskOffIcon,
	MaskOnIcon,
	MinusIcon,
	MinusCircledIcon,
	MixIcon,
	MixerHorizontalIcon,
	MixerVerticalIcon,
	MobileIcon,
	ModulzLogoIcon,
	MoonIcon,
	MoveIcon,
	NotionLogoIcon,
	OpacityIcon,
	OpenInNewWindowIcon,
	OverlineIcon,
	PaddingIcon,
	PaperPlaneIcon,
	PauseIcon,
	Pencil1Icon,
	Pencil2Icon,
	PersonIcon,
	PieChartIcon,
	PilcrowIcon,
	PinBottomIcon,
	PinLeftIcon,
	PinRightIcon,
	PinTopIcon,
	PlayIcon,
	PlusIcon,
	PlusCircledIcon,
	QuestionMarkIcon,
	QuestionMarkCircledIcon,
	QuoteIcon,
	RadiobuttonIcon,
	ReaderIcon,
	ReloadIcon,
	ResetIcon,
	ResumeIcon,
	RocketIcon,
	RotateCounterClockwiseIcon,
	RowSpacingIcon,
	RowsIcon,
	RulerHorizontalIcon,
	RulerSquareIcon,
	ScissorsIcon,
	SectionIcon,
	SewingPinIcon,
	SewingPinFilledIcon,
	ShadowIcon,
	ShadowInnerIcon,
	ShadowNoneIcon,
	ShadowOuterIcon,
	Share1Icon,
	Share2Icon,
	ShuffleIcon,
	SizeIcon,
	SketchLogoIcon,
	SlashIcon,
	SliderIcon,
	SpaceBetweenHorizontallyIcon,
	SpaceBetweenVerticallyIcon,
	SpaceEvenlyHorizontallyIcon,
	SpaceEvenlyVerticallyIcon,
	SpeakerLoudIcon,
	SpeakerModerateIcon,
	SpeakerOffIcon,
	SpeakerQuietIcon,
	SquareIcon,
	StackIcon,
	StarIcon,
	StarFilledIcon,
	StitchesLogoIcon,
	StopIcon,
	StopwatchIcon,
	StretchHorizontallyIcon,
	StretchVerticallyIcon,
	StrikethroughIcon,
	SunIcon,
	SwitchIcon,
	SymbolIcon,
	TableIcon,
	TargetIcon,
	TextIcon,
	TextAlignBottomIcon,
	TextAlignCenterIcon,
	TextAlignJustifyIcon,
	TextAlignLeftIcon,
	TextAlignMiddleIcon,
	TextAlignRightIcon,
	TextAlignTopIcon,
	TextNoneIcon,
	ThickArrowDownIcon,
	ThickArrowLeftIcon,
	ThickArrowRightIcon,
	ThickArrowUpIcon,
	TimerIcon,
	TokensIcon,
	TrackNextIcon,
	TrackPreviousIcon,
	TransformIcon,
	TransparencyGridIcon,
	TrashIcon,
	TriangleDownIcon,
	TriangleLeftIcon,
	TriangleRightIcon,
	TriangleUpIcon,
	TwitterLogoIcon,
	UnderlineIcon,
	UpdateIcon,
	UploadIcon,
	ValueIcon,
	ValueNoneIcon,
	VercelLogoIcon,
	VideoIcon,
	ViewGridIcon,
	ViewHorizontalIcon,
	ViewNoneIcon,
	ViewVerticalIcon,
	WidthIcon,
	ZoomInIcon,
	ZoomOutIcon
} from '@radix-ui/react-icons'

export type TreeIconType =
	| 'Accessibility'
	| 'ActivityLog'
	| 'AlignBaseline'
	| 'AlignBottom'
	| 'AlignCenterHorizontally'
	| 'AlignCenterVertically'
	| 'AlignLeft'
	| 'AlignRight'
	| 'AlignTop'
	| 'AllSides'
	| 'Angle'
	| 'Archive'
	| 'ArrowBottomLeft'
	| 'ArrowBottomRight'
	| 'ArrowDown'
	| 'ArrowLeft'
	| 'ArrowRight'
	| 'ArrowTopLeft'
	| 'ArrowTopRight'
	| 'ArrowUp'
	| 'AspectRatio'
	| 'Avatar'
	| 'Backpack'
	| 'Badge'
	| 'BarChart'
	| 'Bell'
	| 'BlendingMode'
	| 'Bookmark'
	| 'BookmarkFilled'
	| 'BorderAll'
	| 'BorderBottom'
	| 'BorderDashed'
	| 'BorderDotted'
	| 'BorderLeft'
	| 'BorderNone'
	| 'BorderRight'
	| 'BorderSolid'
	| 'BorderSplit'
	| 'BorderStyle'
	| 'BorderTop'
	| 'BorderWidth'
	| 'Box'
	| 'BoxModel'
	| 'Button'
	| 'Calendar'
	| 'Camera'
	| 'CardStack'
	| 'CardStackMinus'
	| 'CardStackPlus'
	| 'CaretDown'
	| 'CaretLeft'
	| 'CaretRight'
	| 'CaretSort'
	| 'CaretUp'
	| 'ChatBubble'
	| 'Check'
	| 'CheckCircled'
	| 'Checkbox'
	| 'ChevronDown'
	| 'ChevronLeft'
	| 'ChevronRight'
	| 'ChevronUp'
	| 'Circle'
	| 'CircleBackslash'
	| 'Clipboard'
	| 'ClipboardCopy'
	| 'Clock'
	| 'Code'
	| 'CodeSandboxLogo'
	| 'ColorWheel'
	| 'ColumnSpacing'
	| 'Columns'
	| 'Commit'
	| 'Component1'
	| 'Component2'
	| 'ComponentBoolean'
	| 'ComponentInstance'
	| 'ComponentNone'
	| 'ComponentPlaceholder'
	| 'Container'
	| 'Cookie'
	| 'Copy'
	| 'CornerBottomLeft'
	| 'CornerBottomRight'
	| 'CornerTopLeft'
	| 'CornerTopRight'
	| 'Corners'
	| 'CountdownTimer'
	| 'CounterClockwiseClock'
	| 'Crop'
	| 'Cross1'
	| 'Cross2'
	| 'CrossCircled'
	| 'Crosshair1'
	| 'Crosshair2'
	| 'CrumpledPaper'
	| 'Cube'
	| 'CursorArrow'
	| 'CursorText'
	| 'Dash'
	| 'Dashboard'
	| 'Desktop'
	| 'Dimensions'
	| 'Disc'
	| 'DiscordLogo'
	| 'DividerHorizontal'
	| 'DividerVertical'
	| 'Dot'
	| 'DotFilled'
	| 'DotsHorizontal'
	| 'DotsVertical'
	| 'DoubleArrowDown'
	| 'DoubleArrowLeft'
	| 'DoubleArrowRight'
	| 'DoubleArrowUp'
	| 'Download'
	| 'DragHandleDots1'
	| 'DragHandleDots2'
	| 'DragHandleHorizontal'
	| 'DragHandleVertical'
	| 'DrawingPin'
	| 'DrawingPinFilled'
	| 'DropdownMenu'
	| 'Enter'
	| 'EnterFullScreen'
	| 'EnvelopeClosed'
	| 'EnvelopeOpen'
	| 'Eraser'
	| 'ExclamationTriangle'
	| 'Exit'
	| 'ExitFullScreen'
	| 'ExternalLink'
	| 'EyeClosed'
	| 'EyeNone'
	| 'EyeOpen'
	| 'Face'
	| 'FigmaLogo'
	| 'File'
	| 'FileMinus'
	| 'FilePlus'
	| 'FileText'
	| 'FontBold'
	| 'FontFamily'
	| 'FontItalic'
	| 'FontRoman'
	| 'FontSize'
	| 'FontStyle'
	| 'Frame'
	| 'FramerLogo'
	| 'Gear'
	| 'GitHubLogo'
	| 'Globe'
	| 'Grid'
	| 'Group'
	| 'Half1'
	| 'Half2'
	| 'HamburgerMenu'
	| 'Hand'
	| 'Heading'
	| 'Heart'
	| 'HeartFilled'
	| 'Height'
	| 'HobbyKnife'
	| 'Home'
	| 'IconJarLogo'
	| 'IdCard'
	| 'Image'
	| 'InfoCircled'
	| 'Input'
	| 'InstagramLogo'
	| 'Keyboard'
	| 'LapTimer'
	| 'Laptop'
	| 'Layers'
	| 'Layout'
	| 'LetterCaseCapitalize'
	| 'LetterCaseLowercase'
	| 'LetterCaseToggle'
	| 'LetterCaseUppercase'
	| 'LetterSpacing'
	| 'LightningBolt'
	| 'LineHeight'
	| 'Link1'
	| 'Link2'
	| 'LinkBreak1'
	| 'LinkBreak2'
	| 'LinkNone1'
	| 'LinkNone2'
	| 'LinkedInLogo'
	| 'ListBullet'
	| 'LockClosed'
	| 'LockOpen1'
	| 'LockOpen2'
	| 'Loop'
	| 'MagicWand'
	| 'MagnifyingGlass'
	| 'Margin'
	| 'MaskOff'
	| 'MaskOn'
	| 'Minus'
	| 'MinusCircled'
	| 'Mix'
	| 'MixerHorizontal'
	| 'MixerVertical'
	| 'Mobile'
	| 'ModulzLogo'
	| 'Moon'
	| 'Move'
	| 'NotionLogo'
	| 'Opacity'
	| 'OpenInNewWindow'
	| 'Overline'
	| 'Padding'
	| 'PaperPlane'
	| 'Pause'
	| 'Pencil1'
	| 'Pencil2'
	| 'Person'
	| 'PieChart'
	| 'Pilcrow'
	| 'PinBottom'
	| 'PinLeft'
	| 'PinRight'
	| 'PinTop'
	| 'Play'
	| 'Plus'
	| 'PlusCircled'
	| 'QuestionMark'
	| 'QuestionMarkCircled'
	| 'Quote'
	| 'Radiobutton'
	| 'Reader'
	| 'Reload'
	| 'Reset'
	| 'Resume'
	| 'Rocket'
	| 'RotateCounterClockwise'
	| 'RowSpacing'
	| 'Rows'
	| 'RulerHorizontal'
	| 'RulerSquare'
	| 'Scissors'
	| 'Section'
	| 'SewingPin'
	| 'SewingPinFilled'
	| 'Shadow'
	| 'ShadowInner'
	| 'ShadowNone'
	| 'ShadowOuter'
	| 'Share1'
	| 'Share2'
	| 'Shuffle'
	| 'Size'
	| 'SketchLogo'
	| 'Slash'
	| 'Slider'
	| 'SpaceBetweenHorizontally'
	| 'SpaceBetweenVertically'
	| 'SpaceEvenlyHorizontally'
	| 'SpaceEvenlyVertically'
	| 'SpeakerLoud'
	| 'SpeakerModerate'
	| 'SpeakerOff'
	| 'SpeakerQuiet'
	| 'Square'
	| 'Stack'
	| 'Star'
	| 'StarFilled'
	| 'StitchesLogo'
	| 'Stop'
	| 'Stopwatch'
	| 'StretchHorizontally'
	| 'StretchVertically'
	| 'Strikethrough'
	| 'Sun'
	| 'Switch'
	| 'Symbol'
	| 'Table'
	| 'Target'
	| 'Text'
	| 'TextAlignBottom'
	| 'TextAlignCenter'
	| 'TextAlignJustify'
	| 'TextAlignLeft'
	| 'TextAlignMiddle'
	| 'TextAlignRight'
	| 'TextAlignTop'
	| 'TextNone'
	| 'ThickArrowDown'
	| 'ThickArrowLeft'
	| 'ThickArrowRight'
	| 'ThickArrowUp'
	| 'Timer'
	| 'Tokens'
	| 'TrackNext'
	| 'TrackPrevious'
	| 'Transform'
	| 'TransparencyGrid'
	| 'Trash'
	| 'TriangleDown'
	| 'TriangleLeft'
	| 'TriangleRight'
	| 'TriangleUp'
	| 'TwitterLogo'
	| 'Underline'
	| 'Update'
	| 'Upload'
	| 'Value'
	| 'ValueNone'
	| 'VercelLogo'
	| 'Video'
	| 'ViewGrid'
	| 'ViewHorizontal'
	| 'ViewNone'
	| 'ViewVertical'
	| 'Width'
	| 'ZoomIn'
	| 'ZoomOut'
	| 'Number'

export const TreeIconMap: {[K in TreeIconType]: JSX.Element} = {
	Accessibility: <AccessibilityIcon />,
	ActivityLog: <ActivityLogIcon />,
	AlignBaseline: <AlignBaselineIcon />,
	AlignBottom: <AlignBottomIcon />,
	AlignCenterHorizontally: <AlignCenterHorizontallyIcon />,
	AlignCenterVertically: <AlignCenterVerticallyIcon />,
	AlignLeft: <AlignLeftIcon />,
	AlignRight: <AlignRightIcon />,
	AlignTop: <AlignTopIcon />,
	AllSides: <AllSidesIcon />,
	Angle: <AngleIcon />,
	Archive: <ArchiveIcon />,
	ArrowBottomLeft: <ArrowBottomLeftIcon />,
	ArrowBottomRight: <ArrowBottomRightIcon />,
	ArrowDown: <ArrowDownIcon />,
	ArrowLeft: <ArrowLeftIcon />,
	ArrowRight: <ArrowRightIcon />,
	ArrowTopLeft: <ArrowTopLeftIcon />,
	ArrowTopRight: <ArrowTopRightIcon />,
	ArrowUp: <ArrowUpIcon />,
	AspectRatio: <AspectRatioIcon />,
	Avatar: <AvatarIcon />,
	Backpack: <BackpackIcon />,
	Badge: <BadgeIcon />,
	BarChart: <BarChartIcon />,
	Bell: <BellIcon />,
	BlendingMode: <BlendingModeIcon />,
	Bookmark: <BookmarkIcon />,
	BookmarkFilled: <BookmarkFilledIcon />,
	BorderAll: <BorderAllIcon />,
	BorderBottom: <BorderBottomIcon />,
	BorderDashed: <BorderDashedIcon />,
	BorderDotted: <BorderDottedIcon />,
	BorderLeft: <BorderLeftIcon />,
	BorderNone: <BorderNoneIcon />,
	BorderRight: <BorderRightIcon />,
	BorderSolid: <BorderSolidIcon />,
	BorderSplit: <BorderSplitIcon />,
	BorderStyle: <BorderStyleIcon />,
	BorderTop: <BorderTopIcon />,
	BorderWidth: <BorderWidthIcon />,
	Box: <BoxIcon />,
	BoxModel: <BoxModelIcon />,
	Button: <ButtonIcon />,
	Calendar: <CalendarIcon />,
	Camera: <CameraIcon />,
	CardStack: <CardStackIcon />,
	CardStackMinus: <CardStackMinusIcon />,
	CardStackPlus: <CardStackPlusIcon />,
	CaretDown: <CaretDownIcon />,
	CaretLeft: <CaretLeftIcon />,
	CaretRight: <CaretRightIcon />,
	CaretSort: <CaretSortIcon />,
	CaretUp: <CaretUpIcon />,
	ChatBubble: <ChatBubbleIcon />,
	Check: <CheckIcon />,
	CheckCircled: <CheckCircledIcon />,
	Checkbox: <CheckboxIcon />,
	ChevronDown: <ChevronDownIcon />,
	ChevronLeft: <ChevronLeftIcon />,
	ChevronRight: <ChevronRightIcon />,
	ChevronUp: <ChevronUpIcon />,
	Circle: <CircleIcon />,
	CircleBackslash: <CircleBackslashIcon />,
	Clipboard: <ClipboardIcon />,
	ClipboardCopy: <ClipboardCopyIcon />,
	Clock: <ClockIcon />,
	Code: <CodeIcon />,
	CodeSandboxLogo: <CodeSandboxLogoIcon />,
	ColorWheel: <ColorWheelIcon />,
	ColumnSpacing: <ColumnSpacingIcon />,
	Columns: <ColumnsIcon />,
	Commit: <CommitIcon />,
	Component1: <Component1Icon />,
	Component2: <Component2Icon />,
	ComponentBoolean: <ComponentBooleanIcon />,
	ComponentInstance: <ComponentInstanceIcon />,
	ComponentNone: <ComponentNoneIcon />,
	ComponentPlaceholder: <ComponentPlaceholderIcon />,
	Container: <ContainerIcon />,
	Cookie: <CookieIcon />,
	Copy: <CopyIcon />,
	CornerBottomLeft: <CornerBottomLeftIcon />,
	CornerBottomRight: <CornerBottomRightIcon />,
	CornerTopLeft: <CornerTopLeftIcon />,
	CornerTopRight: <CornerTopRightIcon />,
	Corners: <CornersIcon />,
	CountdownTimer: <CountdownTimerIcon />,
	CounterClockwiseClock: <CounterClockwiseClockIcon />,
	Crop: <CropIcon />,
	Cross1: <Cross1Icon />,
	Cross2: <Cross2Icon />,
	CrossCircled: <CrossCircledIcon />,
	Crosshair1: <Crosshair1Icon />,
	Crosshair2: <Crosshair2Icon />,
	CrumpledPaper: <CrumpledPaperIcon />,
	Cube: <CubeIcon />,
	CursorArrow: <CursorArrowIcon />,
	CursorText: <CursorTextIcon />,
	Dash: <DashIcon />,
	Dashboard: <DashboardIcon />,
	Desktop: <DesktopIcon />,
	Dimensions: <DimensionsIcon />,
	Disc: <DiscIcon />,
	DiscordLogo: <DiscordLogoIcon />,
	DividerHorizontal: <DividerHorizontalIcon />,
	DividerVertical: <DividerVerticalIcon />,
	Dot: <DotIcon />,
	DotFilled: <DotFilledIcon />,
	DotsHorizontal: <DotsHorizontalIcon />,
	DotsVertical: <DotsVerticalIcon />,
	DoubleArrowDown: <DoubleArrowDownIcon />,
	DoubleArrowLeft: <DoubleArrowLeftIcon />,
	DoubleArrowRight: <DoubleArrowRightIcon />,
	DoubleArrowUp: <DoubleArrowUpIcon />,
	Download: <DownloadIcon />,
	DragHandleDots1: <DragHandleDots1Icon />,
	DragHandleDots2: <DragHandleDots2Icon />,
	DragHandleHorizontal: <DragHandleHorizontalIcon />,
	DragHandleVertical: <DragHandleVerticalIcon />,
	DrawingPin: <DrawingPinIcon />,
	DrawingPinFilled: <DrawingPinFilledIcon />,
	DropdownMenu: <DropdownMenuIcon />,
	Enter: <EnterIcon />,
	EnterFullScreen: <EnterFullScreenIcon />,
	EnvelopeClosed: <EnvelopeClosedIcon />,
	EnvelopeOpen: <EnvelopeOpenIcon />,
	Eraser: <EraserIcon />,
	ExclamationTriangle: <ExclamationTriangleIcon />,
	Exit: <ExitIcon />,
	ExitFullScreen: <ExitFullScreenIcon />,
	ExternalLink: <ExternalLinkIcon />,
	EyeClosed: <EyeClosedIcon />,
	EyeNone: <EyeNoneIcon />,
	EyeOpen: <EyeOpenIcon />,
	Face: <FaceIcon />,
	FigmaLogo: <FigmaLogoIcon />,
	File: <FileIcon />,
	FileMinus: <FileMinusIcon />,
	FilePlus: <FilePlusIcon />,
	FileText: <FileTextIcon />,
	FontBold: <FontBoldIcon />,
	FontFamily: <FontFamilyIcon />,
	FontItalic: <FontItalicIcon />,
	FontRoman: <FontRomanIcon />,
	FontSize: <FontSizeIcon />,
	FontStyle: <FontStyleIcon />,
	Frame: <FrameIcon />,
	FramerLogo: <FramerLogoIcon />,
	Gear: <GearIcon />,
	GitHubLogo: <GitHubLogoIcon />,
	Globe: <GlobeIcon />,
	Grid: <GridIcon />,
	Group: <GroupIcon />,
	Half1: <Half1Icon />,
	Half2: <Half2Icon />,
	HamburgerMenu: <HamburgerMenuIcon />,
	Hand: <HandIcon />,
	Heading: <HeadingIcon />,
	Heart: <HeartIcon />,
	HeartFilled: <HeartFilledIcon />,
	Height: <HeightIcon />,
	HobbyKnife: <HobbyKnifeIcon />,
	Home: <HomeIcon />,
	IconJarLogo: <IconJarLogoIcon />,
	IdCard: <IdCardIcon />,
	Image: <ImageIcon />,
	InfoCircled: <InfoCircledIcon />,
	Input: <InputIcon />,
	InstagramLogo: <InstagramLogoIcon />,
	Keyboard: <KeyboardIcon />,
	LapTimer: <LapTimerIcon />,
	Laptop: <LaptopIcon />,
	Layers: <LayersIcon />,
	Layout: <LayoutIcon />,
	LetterCaseCapitalize: <LetterCaseCapitalizeIcon />,
	LetterCaseLowercase: <LetterCaseLowercaseIcon />,
	LetterCaseToggle: <LetterCaseToggleIcon />,
	LetterCaseUppercase: <LetterCaseUppercaseIcon />,
	LetterSpacing: <LetterSpacingIcon />,
	LightningBolt: <LightningBoltIcon />,
	LineHeight: <LineHeightIcon />,
	Link1: <Link1Icon />,
	Link2: <Link2Icon />,
	LinkBreak1: <LinkBreak1Icon />,
	LinkBreak2: <LinkBreak2Icon />,
	LinkNone1: <LinkNone1Icon />,
	LinkNone2: <LinkNone2Icon />,
	LinkedInLogo: <LinkedInLogoIcon />,
	ListBullet: <ListBulletIcon />,
	LockClosed: <LockClosedIcon />,
	LockOpen1: <LockOpen1Icon />,
	LockOpen2: <LockOpen2Icon />,
	Loop: <LoopIcon />,
	MagicWand: <MagicWandIcon />,
	MagnifyingGlass: <MagnifyingGlassIcon />,
	Margin: <MarginIcon />,
	MaskOff: <MaskOffIcon />,
	MaskOn: <MaskOnIcon />,
	Minus: <MinusIcon />,
	MinusCircled: <MinusCircledIcon />,
	Mix: <MixIcon />,
	MixerHorizontal: <MixerHorizontalIcon />,
	MixerVertical: <MixerVerticalIcon />,
	Mobile: <MobileIcon />,
	ModulzLogo: <ModulzLogoIcon />,
	Moon: <MoonIcon />,
	Move: <MoveIcon />,
	NotionLogo: <NotionLogoIcon />,
	Opacity: <OpacityIcon />,
	OpenInNewWindow: <OpenInNewWindowIcon />,
	Overline: <OverlineIcon />,
	Padding: <PaddingIcon />,
	PaperPlane: <PaperPlaneIcon />,
	Pause: <PauseIcon />,
	Pencil1: <Pencil1Icon />,
	Pencil2: <Pencil2Icon />,
	Person: <PersonIcon />,
	PieChart: <PieChartIcon />,
	Pilcrow: <PilcrowIcon />,
	PinBottom: <PinBottomIcon />,
	PinLeft: <PinLeftIcon />,
	PinRight: <PinRightIcon />,
	PinTop: <PinTopIcon />,
	Play: <PlayIcon />,
	Plus: <PlusIcon />,
	PlusCircled: <PlusCircledIcon />,
	QuestionMark: <QuestionMarkIcon />,
	QuestionMarkCircled: <QuestionMarkCircledIcon />,
	Quote: <QuoteIcon />,
	Radiobutton: <RadiobuttonIcon />,
	Reader: <ReaderIcon />,
	Reload: <ReloadIcon />,
	Reset: <ResetIcon />,
	Resume: <ResumeIcon />,
	Rocket: <RocketIcon />,
	RotateCounterClockwise: <RotateCounterClockwiseIcon />,
	RowSpacing: <RowSpacingIcon />,
	Rows: <RowsIcon />,
	RulerHorizontal: <RulerHorizontalIcon />,
	RulerSquare: <RulerSquareIcon />,
	Scissors: <ScissorsIcon />,
	Section: <SectionIcon />,
	SewingPin: <SewingPinIcon />,
	SewingPinFilled: <SewingPinFilledIcon />,
	Shadow: <ShadowIcon />,
	ShadowInner: <ShadowInnerIcon />,
	ShadowNone: <ShadowNoneIcon />,
	ShadowOuter: <ShadowOuterIcon />,
	Share1: <Share1Icon />,
	Share2: <Share2Icon />,
	Shuffle: <ShuffleIcon />,
	Size: <SizeIcon />,
	SketchLogo: <SketchLogoIcon />,
	Slash: <SlashIcon />,
	Slider: <SliderIcon />,
	SpaceBetweenHorizontally: <SpaceBetweenHorizontallyIcon />,
	SpaceBetweenVertically: <SpaceBetweenVerticallyIcon />,
	SpaceEvenlyHorizontally: <SpaceEvenlyHorizontallyIcon />,
	SpaceEvenlyVertically: <SpaceEvenlyVerticallyIcon />,
	SpeakerLoud: <SpeakerLoudIcon />,
	SpeakerModerate: <SpeakerModerateIcon />,
	SpeakerOff: <SpeakerOffIcon />,
	SpeakerQuiet: <SpeakerQuietIcon />,
	Square: <SquareIcon />,
	Stack: <StackIcon />,
	Star: <StarIcon />,
	StarFilled: <StarFilledIcon />,
	StitchesLogo: <StitchesLogoIcon />,
	Stop: <StopIcon />,
	Stopwatch: <StopwatchIcon />,
	StretchHorizontally: <StretchHorizontallyIcon />,
	StretchVertically: <StretchVerticallyIcon />,
	Strikethrough: <StrikethroughIcon />,
	Sun: <SunIcon />,
	Switch: <SwitchIcon />,
	Symbol: <SymbolIcon />,
	Table: <TableIcon />,
	Target: <TargetIcon />,
	Text: <TextIcon />,
	TextAlignBottom: <TextAlignBottomIcon />,
	TextAlignCenter: <TextAlignCenterIcon />,
	TextAlignJustify: <TextAlignJustifyIcon />,
	TextAlignLeft: <TextAlignLeftIcon />,
	TextAlignMiddle: <TextAlignMiddleIcon />,
	TextAlignRight: <TextAlignRightIcon />,
	TextAlignTop: <TextAlignTopIcon />,
	TextNone: <TextNoneIcon />,
	ThickArrowDown: <ThickArrowDownIcon />,
	ThickArrowLeft: <ThickArrowLeftIcon />,
	ThickArrowRight: <ThickArrowRightIcon />,
	ThickArrowUp: <ThickArrowUpIcon />,
	Timer: <TimerIcon />,
	Tokens: <TokensIcon />,
	TrackNext: <TrackNextIcon />,
	TrackPrevious: <TrackPreviousIcon />,
	Transform: <TransformIcon />,
	TransparencyGrid: <TransparencyGridIcon />,
	Trash: <TrashIcon />,
	TriangleDown: <TriangleDownIcon />,
	TriangleLeft: <TriangleLeftIcon />,
	TriangleRight: <TriangleRightIcon />,
	TriangleUp: <TriangleUpIcon />,
	TwitterLogo: <TwitterLogoIcon />,
	Underline: <UnderlineIcon />,
	Update: <UpdateIcon />,
	Upload: <UploadIcon />,
	Value: <ValueIcon />,
	ValueNone: <ValueNoneIcon />,
	VercelLogo: <VercelLogoIcon />,
	Video: <VideoIcon />,
	ViewGrid: <ViewGridIcon />,
	ViewHorizontal: <ViewHorizontalIcon />,
	ViewNone: <ViewNoneIcon />,
	ViewVertical: <ViewVerticalIcon />,
	Width: <WidthIcon />,
	ZoomIn: <ZoomInIcon />,
	ZoomOut: <ZoomOutIcon />,
	Number: (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 6.25V1.875L3.75 3.125"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.75 10C3.75 9.66848 3.8817 9.35054 4.11612 9.11612C4.35054 8.8817 4.66848 8.75 5 8.75C5.33152 8.75 5.64946 8.8817 5.88388 9.11612C6.1183 9.35054 6.25 9.66848 6.25 10C6.25 10.3694 5.87437 10.9125 5.625 11.25L3.75 13.1256H6.25"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.375 8.75C9.375 8.99723 9.44831 9.2389 9.58566 9.44446C9.72301 9.65002 9.91824 9.81024 10.1466 9.90485C10.3751 9.99946 10.6264 10.0242 10.8689 9.97598C11.1113 9.92775 11.3341 9.8087 11.5089 9.63388C11.6837 9.45907 11.8028 9.23634 11.851 8.99386C11.8992 8.75139 11.8745 8.50005 11.7798 8.27165C11.6852 8.04324 11.525 7.84802 11.3195 7.71066C11.1139 7.57331 10.8722 7.5 10.625 7.5C10.8722 7.5 11.1139 7.42669 11.3195 7.28934C11.525 7.15199 11.6852 6.95676 11.7798 6.72835C11.8745 6.49995 11.8992 6.24861 11.851 6.00614C11.8028 5.76366 11.6837 5.54093 11.5089 5.36612C11.3341 5.1913 11.1113 5.07225 10.8689 5.02402C10.6264 4.97579 10.3751 5.00054 10.1466 5.09515C9.91824 5.18976 9.72301 5.34998 9.58566 5.55554C9.44831 5.7611 9.375 6.00277 9.375 6.25"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.0625 6.25H5.9375"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

/** Icons built-in to Tree */
interface TreeIconProps {
	icon?: TreeIconType
	svg?: string
}

export const TreeIcon = ({icon, svg}: TreeIconProps) => (
	<>
		{icon && (
			<Center sx={{width: 15, height: 24}}>{TreeIconMap[icon]}</Center>
		)}
		{svg && (
			<Image
				src={`data:image/svg+xml;base64,${Buffer.from(svg).toString(
					'base64'
				)}`}
				alt=""
				width="24"
				height="24"
			/>
		)}
	</>
)
