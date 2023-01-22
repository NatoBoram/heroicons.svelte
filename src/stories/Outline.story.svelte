<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Outline } from '../lib'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/README" layout={{ type: 'grid' }} icon="octicon:book-16">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AcademicCap" icon="heroicons:academic-cap">
		<Outline.AcademicCap class={className} />
	</Hst.Variant>
	<Hst.Variant title="AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
		<Outline.AdjustmentsHorizontal class={className} />
	</Hst.Variant>
	<Hst.Variant title="AdjustmentsVertical" icon="heroicons:adjustments-vertical">
		<Outline.AdjustmentsVertical class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBoxArrowDown" icon="heroicons:archive-box-arrow-down">
		<Outline.ArchiveBoxArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
		<Outline.ArchiveBoxXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBox" icon="heroicons:archive-box">
		<Outline.ArchiveBox class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownCircle" icon="heroicons:arrow-down-circle">
		<Outline.ArrowDownCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownLeft" icon="heroicons:arrow-down-left">
		<Outline.ArrowDownLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownOnSquareStack" icon="heroicons:arrow-down-on-square-stack">
		<Outline.ArrowDownOnSquareStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownOnSquare" icon="heroicons:arrow-down-on-square">
		<Outline.ArrowDownOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownRight" icon="heroicons:arrow-down-right">
		<Outline.ArrowDownRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownTray" icon="heroicons:arrow-down-tray">
		<Outline.ArrowDownTray class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDown" icon="heroicons:arrow-down">
		<Outline.ArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeftCircle" icon="heroicons:arrow-left-circle">
		<Outline.ArrowLeftCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
		<Outline.ArrowLeftOnRectangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeft" icon="heroicons:arrow-left">
		<Outline.ArrowLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongDown" icon="heroicons:arrow-long-down">
		<Outline.ArrowLongDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongLeft" icon="heroicons:arrow-long-left">
		<Outline.ArrowLongLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongRight" icon="heroicons:arrow-long-right">
		<Outline.ArrowLongRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongUp" icon="heroicons:arrow-long-up">
		<Outline.ArrowLongUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowPathRoundedSquare" icon="heroicons:arrow-path-rounded-square">
		<Outline.ArrowPathRoundedSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowPath" icon="heroicons:arrow-path">
		<Outline.ArrowPath class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRightCircle" icon="heroicons:arrow-right-circle">
		<Outline.ArrowRightCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRightOnRectangle" icon="heroicons:arrow-right-on-rectangle">
		<Outline.ArrowRightOnRectangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRight" icon="heroicons:arrow-right">
		<Outline.ArrowRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallDown" icon="heroicons:arrow-small-down">
		<Outline.ArrowSmallDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallLeft" icon="heroicons:arrow-small-left">
		<Outline.ArrowSmallLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallRight" icon="heroicons:arrow-small-right">
		<Outline.ArrowSmallRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallUp" icon="heroicons:arrow-small-up">
		<Outline.ArrowSmallUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
		<Outline.ArrowTopRightOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTrendingDown" icon="heroicons:arrow-trending-down">
		<Outline.ArrowTrendingDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTrendingUp" icon="heroicons:arrow-trending-up">
		<Outline.ArrowTrendingUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpCircle" icon="heroicons:arrow-up-circle">
		<Outline.ArrowUpCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpLeft" icon="heroicons:arrow-up-left">
		<Outline.ArrowUpLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpOnSquareStack" icon="heroicons:arrow-up-on-square-stack">
		<Outline.ArrowUpOnSquareStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
		<Outline.ArrowUpOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpRight" icon="heroicons:arrow-up-right">
		<Outline.ArrowUpRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpTray" icon="heroicons:arrow-up-tray">
		<Outline.ArrowUpTray class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUp" icon="heroicons:arrow-up">
		<Outline.ArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnDown" icon="heroicons:arrow-uturn-down">
		<Outline.ArrowUturnDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnLeft" icon="heroicons:arrow-uturn-left">
		<Outline.ArrowUturnLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnRight" icon="heroicons:arrow-uturn-right">
		<Outline.ArrowUturnRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnUp" icon="heroicons:arrow-uturn-up">
		<Outline.ArrowUturnUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsPointingIn" icon="heroicons:arrows-pointing-in">
		<Outline.ArrowsPointingIn class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsPointingOut" icon="heroicons:arrows-pointing-out">
		<Outline.ArrowsPointingOut class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsRightLeft" icon="heroicons:arrows-right-left">
		<Outline.ArrowsRightLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsUpDown" icon="heroicons:arrows-up-down">
		<Outline.ArrowsUpDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="AtSymbol" icon="heroicons:at-symbol">
		<Outline.AtSymbol class={className} />
	</Hst.Variant>
	<Hst.Variant title="Backspace" icon="heroicons:backspace">
		<Outline.Backspace class={className} />
	</Hst.Variant>
	<Hst.Variant title="Backward" icon="heroicons:backward">
		<Outline.Backward class={className} />
	</Hst.Variant>
	<Hst.Variant title="Banknotes" icon="heroicons:banknotes">
		<Outline.Banknotes class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars2" icon="heroicons:bars-2">
		<Outline.Bars2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
		<Outline.Bars3BottomLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3BottomRight" icon="heroicons:bars-3-bottom-right">
		<Outline.Bars3BottomRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3CenterLeft" icon="heroicons:bars-3-center-left">
		<Outline.Bars3CenterLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3" icon="heroicons:bars-3">
		<Outline.Bars3 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars4" icon="heroicons:bars-4">
		<Outline.Bars4 class={className} />
	</Hst.Variant>
	<Hst.Variant title="BarsArrowDown" icon="heroicons:bars-arrow-down">
		<Outline.BarsArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="BarsArrowUp" icon="heroicons:bars-arrow-up">
		<Outline.BarsArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery0" icon="heroicons:battery-0">
		<Outline.Battery0 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery100" icon="heroicons:battery-100">
		<Outline.Battery100 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery50" icon="heroicons:battery-50">
		<Outline.Battery50 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Beaker" icon="heroicons:beaker">
		<Outline.Beaker class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellAlert" icon="heroicons:bell-alert">
		<Outline.BellAlert class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellSlash" icon="heroicons:bell-slash">
		<Outline.BellSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellSnooze" icon="heroicons:bell-snooze">
		<Outline.BellSnooze class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bell" icon="heroicons:bell">
		<Outline.Bell class={className} />
	</Hst.Variant>
	<Hst.Variant title="BoltSlash" icon="heroicons:bolt-slash">
		<Outline.BoltSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bolt" icon="heroicons:bolt">
		<Outline.Bolt class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookOpen" icon="heroicons:book-open">
		<Outline.BookOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookmarkSlash" icon="heroicons:bookmark-slash">
		<Outline.BookmarkSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookmarkSquare" icon="heroicons:bookmark-square">
		<Outline.BookmarkSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bookmark" icon="heroicons:bookmark">
		<Outline.Bookmark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Briefcase" icon="heroicons:briefcase">
		<Outline.Briefcase class={className} />
	</Hst.Variant>
	<Hst.Variant title="BugAnt" icon="heroicons:bug-ant">
		<Outline.BugAnt class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingLibrary" icon="heroicons:building-library">
		<Outline.BuildingLibrary class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingOffice2" icon="heroicons:building-office-2">
		<Outline.BuildingOffice2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingOffice" icon="heroicons:building-office">
		<Outline.BuildingOffice class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingStorefront" icon="heroicons:building-storefront">
		<Outline.BuildingStorefront class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cake" icon="heroicons:cake">
		<Outline.Cake class={className} />
	</Hst.Variant>
	<Hst.Variant title="Calculator" icon="heroicons:calculator">
		<Outline.Calculator class={className} />
	</Hst.Variant>
	<Hst.Variant title="CalendarDays" icon="heroicons:calendar-days">
		<Outline.CalendarDays class={className} />
	</Hst.Variant>
	<Hst.Variant title="Calendar" icon="heroicons:calendar">
		<Outline.Calendar class={className} />
	</Hst.Variant>
	<Hst.Variant title="Camera" icon="heroicons:camera">
		<Outline.Camera class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartBarSquare" icon="heroicons:chart-bar-square">
		<Outline.ChartBarSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartBar" icon="heroicons:chart-bar">
		<Outline.ChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartPie" icon="heroicons:chart-pie">
		<Outline.ChartPie class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleBottomCenterText" icon="heroicons:chat-bubble-bottom-center-text">
		<Outline.ChatBubbleBottomCenterText class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleBottomCenter" icon="heroicons:chat-bubble-bottom-center">
		<Outline.ChatBubbleBottomCenter class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeftEllipsis" icon="heroicons:chat-bubble-left-ellipsis">
		<Outline.ChatBubbleLeftEllipsis class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeftRight" icon="heroicons:chat-bubble-left-right">
		<Outline.ChatBubbleLeftRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeft" icon="heroicons:chat-bubble-left">
		<Outline.ChatBubbleLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleOvalLeftEllipsis" icon="heroicons:chat-bubble-oval-left-ellipsis">
		<Outline.ChatBubbleOvalLeftEllipsis class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
		<Outline.ChatBubbleOvalLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="CheckBadge" icon="heroicons:check-badge">
		<Outline.CheckBadge class={className} />
	</Hst.Variant>
	<Hst.Variant title="CheckCircle" icon="heroicons:check-circle">
		<Outline.CheckCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Check" icon="heroicons:check">
		<Outline.Check class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleDown" icon="heroicons:chevron-double-down">
		<Outline.ChevronDoubleDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleLeft" icon="heroicons:chevron-double-left">
		<Outline.ChevronDoubleLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleRight" icon="heroicons:chevron-double-right">
		<Outline.ChevronDoubleRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleUp" icon="heroicons:chevron-double-up">
		<Outline.ChevronDoubleUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDown" icon="heroicons:chevron-down">
		<Outline.ChevronDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronLeft" icon="heroicons:chevron-left">
		<Outline.ChevronLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronRight" icon="heroicons:chevron-right">
		<Outline.ChevronRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronUpDown" icon="heroicons:chevron-up-down">
		<Outline.ChevronUpDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronUp" icon="heroicons:chevron-up">
		<Outline.ChevronUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="CircleStack" icon="heroicons:circle-stack">
		<Outline.CircleStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocumentCheck" icon="heroicons:clipboard-document-check">
		<Outline.ClipboardDocumentCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocumentList" icon="heroicons:clipboard-document-list">
		<Outline.ClipboardDocumentList class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocument" icon="heroicons:clipboard-document">
		<Outline.ClipboardDocument class={className} />
	</Hst.Variant>
	<Hst.Variant title="Clipboard" icon="heroicons:clipboard">
		<Outline.Clipboard class={className} />
	</Hst.Variant>
	<Hst.Variant title="Clock" icon="heroicons:clock">
		<Outline.Clock class={className} />
	</Hst.Variant>
	<Hst.Variant title="CloudArrowDown" icon="heroicons:cloud-arrow-down">
		<Outline.CloudArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="CloudArrowUp" icon="heroicons:cloud-arrow-up">
		<Outline.CloudArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cloud" icon="heroicons:cloud">
		<Outline.Cloud class={className} />
	</Hst.Variant>
	<Hst.Variant title="CodeBracketSquare" icon="heroicons:code-bracket-square">
		<Outline.CodeBracketSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="CodeBracket" icon="heroicons:code-bracket">
		<Outline.CodeBracket class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog6Tooth" icon="heroicons:cog-6-tooth">
		<Outline.Cog6Tooth class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog8Tooth" icon="heroicons:cog-8-tooth">
		<Outline.Cog8Tooth class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog" icon="heroicons:cog">
		<Outline.Cog class={className} />
	</Hst.Variant>
	<Hst.Variant title="CommandLine" icon="heroicons:command-line">
		<Outline.CommandLine class={className} />
	</Hst.Variant>
	<Hst.Variant title="ComputerDesktop" icon="heroicons:computer-desktop">
		<Outline.ComputerDesktop class={className} />
	</Hst.Variant>
	<Hst.Variant title="CpuChip" icon="heroicons:cpu-chip">
		<Outline.CpuChip class={className} />
	</Hst.Variant>
	<Hst.Variant title="CreditCard" icon="heroicons:credit-card">
		<Outline.CreditCard class={className} />
	</Hst.Variant>
	<Hst.Variant title="CubeTransparent" icon="heroicons:cube-transparent">
		<Outline.CubeTransparent class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cube" icon="heroicons:cube">
		<Outline.Cube class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyBangladeshi" icon="heroicons:currency-bangladeshi">
		<Outline.CurrencyBangladeshi class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyDollar" icon="heroicons:currency-dollar">
		<Outline.CurrencyDollar class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyEuro" icon="heroicons:currency-euro">
		<Outline.CurrencyEuro class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyPound" icon="heroicons:currency-pound">
		<Outline.CurrencyPound class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyRupee" icon="heroicons:currency-rupee">
		<Outline.CurrencyRupee class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyYen" icon="heroicons:currency-yen">
		<Outline.CurrencyYen class={className} />
	</Hst.Variant>
	<Hst.Variant title="CursorArrowRays" icon="heroicons:cursor-arrow-rays">
		<Outline.CursorArrowRays class={className} />
	</Hst.Variant>
	<Hst.Variant title="CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
		<Outline.CursorArrowRipple class={className} />
	</Hst.Variant>
	<Hst.Variant title="DevicePhoneMobile" icon="heroicons:device-phone-mobile">
		<Outline.DevicePhoneMobile class={className} />
	</Hst.Variant>
	<Hst.Variant title="DeviceTablet" icon="heroicons:device-tablet">
		<Outline.DeviceTablet class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentArrowDown" icon="heroicons:document-arrow-down">
		<Outline.DocumentArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentArrowUp" icon="heroicons:document-arrow-up">
		<Outline.DocumentArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentChartBar" icon="heroicons:document-chart-bar">
		<Outline.DocumentChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentCheck" icon="heroicons:document-check">
		<Outline.DocumentCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentDuplicate" icon="heroicons:document-duplicate">
		<Outline.DocumentDuplicate class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentMagnifyingGlass" icon="heroicons:document-magnifying-glass">
		<Outline.DocumentMagnifyingGlass class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentMinus" icon="heroicons:document-minus">
		<Outline.DocumentMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentPlus" icon="heroicons:document-plus">
		<Outline.DocumentPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentText" icon="heroicons:document-text">
		<Outline.DocumentText class={className} />
	</Hst.Variant>
	<Hst.Variant title="Document" icon="heroicons:document">
		<Outline.Document class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisHorizontalCircle" icon="heroicons:ellipsis-horizontal-circle">
		<Outline.EllipsisHorizontalCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
		<Outline.EllipsisHorizontal class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisVertical" icon="heroicons:ellipsis-vertical">
		<Outline.EllipsisVertical class={className} />
	</Hst.Variant>
	<Hst.Variant title="EnvelopeOpen" icon="heroicons:envelope-open">
		<Outline.EnvelopeOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="Envelope" icon="heroicons:envelope">
		<Outline.Envelope class={className} />
	</Hst.Variant>
	<Hst.Variant title="ExclamationCircle" icon="heroicons:exclamation-circle">
		<Outline.ExclamationCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ExclamationTriangle" icon="heroicons:exclamation-triangle">
		<Outline.ExclamationTriangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="EyeDropper" icon="heroicons:eye-dropper">
		<Outline.EyeDropper class={className} />
	</Hst.Variant>
	<Hst.Variant title="EyeSlash" icon="heroicons:eye-slash">
		<Outline.EyeSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Eye" icon="heroicons:eye">
		<Outline.Eye class={className} />
	</Hst.Variant>
	<Hst.Variant title="FaceFrown" icon="heroicons:face-frown">
		<Outline.FaceFrown class={className} />
	</Hst.Variant>
	<Hst.Variant title="FaceSmile" icon="heroicons:face-smile">
		<Outline.FaceSmile class={className} />
	</Hst.Variant>
	<Hst.Variant title="Film" icon="heroicons:film">
		<Outline.Film class={className} />
	</Hst.Variant>
	<Hst.Variant title="FingerPrint" icon="heroicons:finger-print">
		<Outline.FingerPrint class={className} />
	</Hst.Variant>
	<Hst.Variant title="Fire" icon="heroicons:fire">
		<Outline.Fire class={className} />
	</Hst.Variant>
	<Hst.Variant title="Flag" icon="heroicons:flag">
		<Outline.Flag class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderArrowDown" icon="heroicons:folder-arrow-down">
		<Outline.FolderArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderMinus" icon="heroicons:folder-minus">
		<Outline.FolderMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderOpen" icon="heroicons:folder-open">
		<Outline.FolderOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderPlus" icon="heroicons:folder-plus">
		<Outline.FolderPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Folder" icon="heroicons:folder">
		<Outline.Folder class={className} />
	</Hst.Variant>
	<Hst.Variant title="Forward" icon="heroicons:forward">
		<Outline.Forward class={className} />
	</Hst.Variant>
	<Hst.Variant title="Funnel" icon="heroicons:funnel">
		<Outline.Funnel class={className} />
	</Hst.Variant>
	<Hst.Variant title="Gif" icon="heroicons:gif">
		<Outline.Gif class={className} />
	</Hst.Variant>
	<Hst.Variant title="GiftTop" icon="heroicons:gift-top">
		<Outline.GiftTop class={className} />
	</Hst.Variant>
	<Hst.Variant title="Gift" icon="heroicons:gift">
		<Outline.Gift class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAlt" icon="heroicons:globe-alt">
		<Outline.GlobeAlt class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAmericas" icon="heroicons:globe-americas">
		<Outline.GlobeAmericas class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAsiaAustralia" icon="heroicons:globe-asia-australia">
		<Outline.GlobeAsiaAustralia class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
		<Outline.GlobeEuropeAfrica class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandRaised" icon="heroicons:hand-raised">
		<Outline.HandRaised class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandThumbDown" icon="heroicons:hand-thumb-down">
		<Outline.HandThumbDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandThumbUp" icon="heroicons:hand-thumb-up">
		<Outline.HandThumbUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Hashtag" icon="heroicons:hashtag">
		<Outline.Hashtag class={className} />
	</Hst.Variant>
	<Hst.Variant title="Heart" icon="heroicons:heart">
		<Outline.Heart class={className} />
	</Hst.Variant>
	<Hst.Variant title="HomeModern" icon="heroicons:home-modern">
		<Outline.HomeModern class={className} />
	</Hst.Variant>
	<Hst.Variant title="Home" icon="heroicons:home">
		<Outline.Home class={className} />
	</Hst.Variant>
	<Hst.Variant title="Identification" icon="heroicons:identification">
		<Outline.Identification class={className} />
	</Hst.Variant>
	<Hst.Variant title="InboxArrowDown" icon="heroicons:inbox-arrow-down">
		<Outline.InboxArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="InboxStack" icon="heroicons:inbox-stack">
		<Outline.InboxStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Inbox" icon="heroicons:inbox">
		<Outline.Inbox class={className} />
	</Hst.Variant>
	<Hst.Variant title="InformationCircle" icon="heroicons:information-circle">
		<Outline.InformationCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Key" icon="heroicons:key">
		<Outline.Key class={className} />
	</Hst.Variant>
	<Hst.Variant title="Language" icon="heroicons:language">
		<Outline.Language class={className} />
	</Hst.Variant>
	<Hst.Variant title="Lifebuoy" icon="heroicons:lifebuoy">
		<Outline.Lifebuoy class={className} />
	</Hst.Variant>
	<Hst.Variant title="LightBulb" icon="heroicons:light-bulb">
		<Outline.LightBulb class={className} />
	</Hst.Variant>
	<Hst.Variant title="Link" icon="heroicons:link">
		<Outline.Link class={className} />
	</Hst.Variant>
	<Hst.Variant title="ListBullet" icon="heroicons:list-bullet">
		<Outline.ListBullet class={className} />
	</Hst.Variant>
	<Hst.Variant title="LockClosed" icon="heroicons:lock-closed">
		<Outline.LockClosed class={className} />
	</Hst.Variant>
	<Hst.Variant title="LockOpen" icon="heroicons:lock-open">
		<Outline.LockOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassCircle" icon="heroicons:magnifying-glass-circle">
		<Outline.MagnifyingGlassCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassMinus" icon="heroicons:magnifying-glass-minus">
		<Outline.MagnifyingGlassMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
		<Outline.MagnifyingGlassPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlass" icon="heroicons:magnifying-glass">
		<Outline.MagnifyingGlass class={className} />
	</Hst.Variant>
	<Hst.Variant title="MapPin" icon="heroicons:map-pin">
		<Outline.MapPin class={className} />
	</Hst.Variant>
	<Hst.Variant title="Map" icon="heroicons:map">
		<Outline.Map class={className} />
	</Hst.Variant>
	<Hst.Variant title="Megaphone" icon="heroicons:megaphone">
		<Outline.Megaphone class={className} />
	</Hst.Variant>
	<Hst.Variant title="Microphone" icon="heroicons:microphone">
		<Outline.Microphone class={className} />
	</Hst.Variant>
	<Hst.Variant title="MinusCircle" icon="heroicons:minus-circle">
		<Outline.MinusCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="MinusSmall" icon="heroicons:minus-small">
		<Outline.MinusSmall class={className} />
	</Hst.Variant>
	<Hst.Variant title="Minus" icon="heroicons:minus">
		<Outline.Minus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Moon" icon="heroicons:moon">
		<Outline.Moon class={className} />
	</Hst.Variant>
	<Hst.Variant title="MusicalNote" icon="heroicons:musical-note">
		<Outline.MusicalNote class={className} />
	</Hst.Variant>
	<Hst.Variant title="Newspaper" icon="heroicons:newspaper">
		<Outline.Newspaper class={className} />
	</Hst.Variant>
	<Hst.Variant title="NoSymbol" icon="heroicons:no-symbol">
		<Outline.NoSymbol class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaintBrush" icon="heroicons:paint-brush">
		<Outline.PaintBrush class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaperAirplane" icon="heroicons:paper-airplane">
		<Outline.PaperAirplane class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaperClip" icon="heroicons:paper-clip">
		<Outline.PaperClip class={className} />
	</Hst.Variant>
	<Hst.Variant title="PauseCircle" icon="heroicons:pause-circle">
		<Outline.PauseCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Pause" icon="heroicons:pause">
		<Outline.Pause class={className} />
	</Hst.Variant>
	<Hst.Variant title="PencilSquare" icon="heroicons:pencil-square">
		<Outline.PencilSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="Pencil" icon="heroicons:pencil">
		<Outline.Pencil class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
		<Outline.PhoneArrowDownLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
		<Outline.PhoneArrowUpRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneXMark" icon="heroicons:phone-x-mark">
		<Outline.PhoneXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Phone" icon="heroicons:phone">
		<Outline.Phone class={className} />
	</Hst.Variant>
	<Hst.Variant title="Photo" icon="heroicons:photo">
		<Outline.Photo class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlayCircle" icon="heroicons:play-circle">
		<Outline.PlayCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlayPause" icon="heroicons:play-pause">
		<Outline.PlayPause class={className} />
	</Hst.Variant>
	<Hst.Variant title="Play" icon="heroicons:play">
		<Outline.Play class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlusCircle" icon="heroicons:plus-circle">
		<Outline.PlusCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlusSmall" icon="heroicons:plus-small">
		<Outline.PlusSmall class={className} />
	</Hst.Variant>
	<Hst.Variant title="Plus" icon="heroicons:plus">
		<Outline.Plus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Power" icon="heroicons:power">
		<Outline.Power class={className} />
	</Hst.Variant>
	<Hst.Variant title="PresentationChartBar" icon="heroicons:presentation-chart-bar">
		<Outline.PresentationChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="PresentationChartLine" icon="heroicons:presentation-chart-line">
		<Outline.PresentationChartLine class={className} />
	</Hst.Variant>
	<Hst.Variant title="Printer" icon="heroicons:printer">
		<Outline.Printer class={className} />
	</Hst.Variant>
	<Hst.Variant title="PuzzlePiece" icon="heroicons:puzzle-piece">
		<Outline.PuzzlePiece class={className} />
	</Hst.Variant>
	<Hst.Variant title="QrCode" icon="heroicons:qr-code">
		<Outline.QrCode class={className} />
	</Hst.Variant>
	<Hst.Variant title="QuestionMarkCircle" icon="heroicons:question-mark-circle">
		<Outline.QuestionMarkCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="QueueList" icon="heroicons:queue-list">
		<Outline.QueueList class={className} />
	</Hst.Variant>
	<Hst.Variant title="Radio" icon="heroicons:radio">
		<Outline.Radio class={className} />
	</Hst.Variant>
	<Hst.Variant title="ReceiptPercent" icon="heroicons:receipt-percent">
		<Outline.ReceiptPercent class={className} />
	</Hst.Variant>
	<Hst.Variant title="ReceiptRefund" icon="heroicons:receipt-refund">
		<Outline.ReceiptRefund class={className} />
	</Hst.Variant>
	<Hst.Variant title="RectangleGroup" icon="heroicons:rectangle-group">
		<Outline.RectangleGroup class={className} />
	</Hst.Variant>
	<Hst.Variant title="RectangleStack" icon="heroicons:rectangle-stack">
		<Outline.RectangleStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="RocketLaunch" icon="heroicons:rocket-launch">
		<Outline.RocketLaunch class={className} />
	</Hst.Variant>
	<Hst.Variant title="Rss" icon="heroicons:rss">
		<Outline.Rss class={className} />
	</Hst.Variant>
	<Hst.Variant title="Scale" icon="heroicons:scale">
		<Outline.Scale class={className} />
	</Hst.Variant>
	<Hst.Variant title="Scissors" icon="heroicons:scissors">
		<Outline.Scissors class={className} />
	</Hst.Variant>
	<Hst.Variant title="ServerStack" icon="heroicons:server-stack">
		<Outline.ServerStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Server" icon="heroicons:server">
		<Outline.Server class={className} />
	</Hst.Variant>
	<Hst.Variant title="Share" icon="heroicons:share">
		<Outline.Share class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShieldCheck" icon="heroicons:shield-check">
		<Outline.ShieldCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShieldExclamation" icon="heroicons:shield-exclamation">
		<Outline.ShieldExclamation class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShoppingBag" icon="heroicons:shopping-bag">
		<Outline.ShoppingBag class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShoppingCart" icon="heroicons:shopping-cart">
		<Outline.ShoppingCart class={className} />
	</Hst.Variant>
	<Hst.Variant title="SignalSlash" icon="heroicons:signal-slash">
		<Outline.SignalSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Signal" icon="heroicons:signal">
		<Outline.Signal class={className} />
	</Hst.Variant>
	<Hst.Variant title="Sparkles" icon="heroicons:sparkles">
		<Outline.Sparkles class={className} />
	</Hst.Variant>
	<Hst.Variant title="SpeakerWave" icon="heroicons:speaker-wave">
		<Outline.SpeakerWave class={className} />
	</Hst.Variant>
	<Hst.Variant title="SpeakerXMark" icon="heroicons:speaker-x-mark">
		<Outline.SpeakerXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Square2Stack" icon="heroicons:square-2-stack">
		<Outline.Square2Stack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Square3Stack3d" icon="heroicons:square-3-stack-3d">
		<Outline.Square3Stack3d class={className} />
	</Hst.Variant>
	<Hst.Variant title="Squares2x2" icon="heroicons:squares-2x2">
		<Outline.Squares2x2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="SquaresPlus" icon="heroicons:squares-plus">
		<Outline.SquaresPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Star" icon="heroicons:star">
		<Outline.Star class={className} />
	</Hst.Variant>
	<Hst.Variant title="StopCircle" icon="heroicons:stop-circle">
		<Outline.StopCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Stop" icon="heroicons:stop">
		<Outline.Stop class={className} />
	</Hst.Variant>
	<Hst.Variant title="Sun" icon="heroicons:sun">
		<Outline.Sun class={className} />
	</Hst.Variant>
	<Hst.Variant title="Swatch" icon="heroicons:swatch">
		<Outline.Swatch class={className} />
	</Hst.Variant>
	<Hst.Variant title="TableCells" icon="heroicons:table-cells">
		<Outline.TableCells class={className} />
	</Hst.Variant>
	<Hst.Variant title="Tag" icon="heroicons:tag">
		<Outline.Tag class={className} />
	</Hst.Variant>
	<Hst.Variant title="Ticket" icon="heroicons:ticket">
		<Outline.Ticket class={className} />
	</Hst.Variant>
	<Hst.Variant title="Trash" icon="heroicons:trash">
		<Outline.Trash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Trophy" icon="heroicons:trophy">
		<Outline.Trophy class={className} />
	</Hst.Variant>
	<Hst.Variant title="Truck" icon="heroicons:truck">
		<Outline.Truck class={className} />
	</Hst.Variant>
	<Hst.Variant title="Tv" icon="heroicons:tv">
		<Outline.Tv class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserCircle" icon="heroicons:user-circle">
		<Outline.UserCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserGroup" icon="heroicons:user-group">
		<Outline.UserGroup class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserMinus" icon="heroicons:user-minus">
		<Outline.UserMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserPlus" icon="heroicons:user-plus">
		<Outline.UserPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="User" icon="heroicons:user">
		<Outline.User class={className} />
	</Hst.Variant>
	<Hst.Variant title="Users" icon="heroicons:users">
		<Outline.Users class={className} />
	</Hst.Variant>
	<Hst.Variant title="Variable" icon="heroicons:variable">
		<Outline.Variable class={className} />
	</Hst.Variant>
	<Hst.Variant title="VideoCameraSlash" icon="heroicons:video-camera-slash">
		<Outline.VideoCameraSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="VideoCamera" icon="heroicons:video-camera">
		<Outline.VideoCamera class={className} />
	</Hst.Variant>
	<Hst.Variant title="ViewColumns" icon="heroicons:view-columns">
		<Outline.ViewColumns class={className} />
	</Hst.Variant>
	<Hst.Variant title="ViewfinderCircle" icon="heroicons:viewfinder-circle">
		<Outline.ViewfinderCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wallet" icon="heroicons:wallet">
		<Outline.Wallet class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wifi" icon="heroicons:wifi">
		<Outline.Wifi class={className} />
	</Hst.Variant>
	<Hst.Variant title="Window" icon="heroicons:window">
		<Outline.Window class={className} />
	</Hst.Variant>
	<Hst.Variant title="WrenchScrewdriver" icon="heroicons:wrench-screwdriver">
		<Outline.WrenchScrewdriver class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wrench" icon="heroicons:wrench">
		<Outline.Wrench class={className} />
	</Hst.Variant>
	<Hst.Variant title="XCircle" icon="heroicons:x-circle">
		<Outline.XCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="XMark" icon="heroicons:x-mark">
		<Outline.XMark class={className} />
	</Hst.Variant>
</Hst.Story>
