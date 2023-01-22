<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Solid } from '../lib'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/README" layout={{ type: 'grid' }} icon="octicon:book-16">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AcademicCap" icon="heroicons:academic-cap">
		<Solid.AcademicCap class={className} />
	</Hst.Variant>
	<Hst.Variant title="AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
		<Solid.AdjustmentsHorizontal class={className} />
	</Hst.Variant>
	<Hst.Variant title="AdjustmentsVertical" icon="heroicons:adjustments-vertical">
		<Solid.AdjustmentsVertical class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBoxArrowDown" icon="heroicons:archive-box-arrow-down">
		<Solid.ArchiveBoxArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
		<Solid.ArchiveBoxXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBox" icon="heroicons:archive-box">
		<Solid.ArchiveBox class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownCircle" icon="heroicons:arrow-down-circle">
		<Solid.ArrowDownCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownLeft" icon="heroicons:arrow-down-left">
		<Solid.ArrowDownLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownOnSquareStack" icon="heroicons:arrow-down-on-square-stack">
		<Solid.ArrowDownOnSquareStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownOnSquare" icon="heroicons:arrow-down-on-square">
		<Solid.ArrowDownOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownRight" icon="heroicons:arrow-down-right">
		<Solid.ArrowDownRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownTray" icon="heroicons:arrow-down-tray">
		<Solid.ArrowDownTray class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDown" icon="heroicons:arrow-down">
		<Solid.ArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeftCircle" icon="heroicons:arrow-left-circle">
		<Solid.ArrowLeftCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
		<Solid.ArrowLeftOnRectangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeft" icon="heroicons:arrow-left">
		<Solid.ArrowLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongDown" icon="heroicons:arrow-long-down">
		<Solid.ArrowLongDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongLeft" icon="heroicons:arrow-long-left">
		<Solid.ArrowLongLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongRight" icon="heroicons:arrow-long-right">
		<Solid.ArrowLongRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongUp" icon="heroicons:arrow-long-up">
		<Solid.ArrowLongUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowPathRoundedSquare" icon="heroicons:arrow-path-rounded-square">
		<Solid.ArrowPathRoundedSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowPath" icon="heroicons:arrow-path">
		<Solid.ArrowPath class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRightCircle" icon="heroicons:arrow-right-circle">
		<Solid.ArrowRightCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRightOnRectangle" icon="heroicons:arrow-right-on-rectangle">
		<Solid.ArrowRightOnRectangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRight" icon="heroicons:arrow-right">
		<Solid.ArrowRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallDown" icon="heroicons:arrow-small-down">
		<Solid.ArrowSmallDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallLeft" icon="heroicons:arrow-small-left">
		<Solid.ArrowSmallLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallRight" icon="heroicons:arrow-small-right">
		<Solid.ArrowSmallRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallUp" icon="heroicons:arrow-small-up">
		<Solid.ArrowSmallUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
		<Solid.ArrowTopRightOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTrendingDown" icon="heroicons:arrow-trending-down">
		<Solid.ArrowTrendingDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTrendingUp" icon="heroicons:arrow-trending-up">
		<Solid.ArrowTrendingUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpCircle" icon="heroicons:arrow-up-circle">
		<Solid.ArrowUpCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpLeft" icon="heroicons:arrow-up-left">
		<Solid.ArrowUpLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpOnSquareStack" icon="heroicons:arrow-up-on-square-stack">
		<Solid.ArrowUpOnSquareStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
		<Solid.ArrowUpOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpRight" icon="heroicons:arrow-up-right">
		<Solid.ArrowUpRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpTray" icon="heroicons:arrow-up-tray">
		<Solid.ArrowUpTray class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUp" icon="heroicons:arrow-up">
		<Solid.ArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnDown" icon="heroicons:arrow-uturn-down">
		<Solid.ArrowUturnDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnLeft" icon="heroicons:arrow-uturn-left">
		<Solid.ArrowUturnLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnRight" icon="heroicons:arrow-uturn-right">
		<Solid.ArrowUturnRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnUp" icon="heroicons:arrow-uturn-up">
		<Solid.ArrowUturnUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsPointingIn" icon="heroicons:arrows-pointing-in">
		<Solid.ArrowsPointingIn class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsPointingOut" icon="heroicons:arrows-pointing-out">
		<Solid.ArrowsPointingOut class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsRightLeft" icon="heroicons:arrows-right-left">
		<Solid.ArrowsRightLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsUpDown" icon="heroicons:arrows-up-down">
		<Solid.ArrowsUpDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="AtSymbol" icon="heroicons:at-symbol">
		<Solid.AtSymbol class={className} />
	</Hst.Variant>
	<Hst.Variant title="Backspace" icon="heroicons:backspace">
		<Solid.Backspace class={className} />
	</Hst.Variant>
	<Hst.Variant title="Backward" icon="heroicons:backward">
		<Solid.Backward class={className} />
	</Hst.Variant>
	<Hst.Variant title="Banknotes" icon="heroicons:banknotes">
		<Solid.Banknotes class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars2" icon="heroicons:bars-2">
		<Solid.Bars2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
		<Solid.Bars3BottomLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3BottomRight" icon="heroicons:bars-3-bottom-right">
		<Solid.Bars3BottomRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3CenterLeft" icon="heroicons:bars-3-center-left">
		<Solid.Bars3CenterLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3" icon="heroicons:bars-3">
		<Solid.Bars3 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars4" icon="heroicons:bars-4">
		<Solid.Bars4 class={className} />
	</Hst.Variant>
	<Hst.Variant title="BarsArrowDown" icon="heroicons:bars-arrow-down">
		<Solid.BarsArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="BarsArrowUp" icon="heroicons:bars-arrow-up">
		<Solid.BarsArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery0" icon="heroicons:battery-0">
		<Solid.Battery0 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery100" icon="heroicons:battery-100">
		<Solid.Battery100 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery50" icon="heroicons:battery-50">
		<Solid.Battery50 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Beaker" icon="heroicons:beaker">
		<Solid.Beaker class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellAlert" icon="heroicons:bell-alert">
		<Solid.BellAlert class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellSlash" icon="heroicons:bell-slash">
		<Solid.BellSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellSnooze" icon="heroicons:bell-snooze">
		<Solid.BellSnooze class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bell" icon="heroicons:bell">
		<Solid.Bell class={className} />
	</Hst.Variant>
	<Hst.Variant title="BoltSlash" icon="heroicons:bolt-slash">
		<Solid.BoltSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bolt" icon="heroicons:bolt">
		<Solid.Bolt class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookOpen" icon="heroicons:book-open">
		<Solid.BookOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookmarkSlash" icon="heroicons:bookmark-slash">
		<Solid.BookmarkSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookmarkSquare" icon="heroicons:bookmark-square">
		<Solid.BookmarkSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bookmark" icon="heroicons:bookmark">
		<Solid.Bookmark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Briefcase" icon="heroicons:briefcase">
		<Solid.Briefcase class={className} />
	</Hst.Variant>
	<Hst.Variant title="BugAnt" icon="heroicons:bug-ant">
		<Solid.BugAnt class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingLibrary" icon="heroicons:building-library">
		<Solid.BuildingLibrary class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingOffice2" icon="heroicons:building-office-2">
		<Solid.BuildingOffice2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingOffice" icon="heroicons:building-office">
		<Solid.BuildingOffice class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingStorefront" icon="heroicons:building-storefront">
		<Solid.BuildingStorefront class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cake" icon="heroicons:cake">
		<Solid.Cake class={className} />
	</Hst.Variant>
	<Hst.Variant title="Calculator" icon="heroicons:calculator">
		<Solid.Calculator class={className} />
	</Hst.Variant>
	<Hst.Variant title="CalendarDays" icon="heroicons:calendar-days">
		<Solid.CalendarDays class={className} />
	</Hst.Variant>
	<Hst.Variant title="Calendar" icon="heroicons:calendar">
		<Solid.Calendar class={className} />
	</Hst.Variant>
	<Hst.Variant title="Camera" icon="heroicons:camera">
		<Solid.Camera class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartBarSquare" icon="heroicons:chart-bar-square">
		<Solid.ChartBarSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartBar" icon="heroicons:chart-bar">
		<Solid.ChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartPie" icon="heroicons:chart-pie">
		<Solid.ChartPie class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleBottomCenterText" icon="heroicons:chat-bubble-bottom-center-text">
		<Solid.ChatBubbleBottomCenterText class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleBottomCenter" icon="heroicons:chat-bubble-bottom-center">
		<Solid.ChatBubbleBottomCenter class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeftEllipsis" icon="heroicons:chat-bubble-left-ellipsis">
		<Solid.ChatBubbleLeftEllipsis class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeftRight" icon="heroicons:chat-bubble-left-right">
		<Solid.ChatBubbleLeftRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeft" icon="heroicons:chat-bubble-left">
		<Solid.ChatBubbleLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleOvalLeftEllipsis" icon="heroicons:chat-bubble-oval-left-ellipsis">
		<Solid.ChatBubbleOvalLeftEllipsis class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
		<Solid.ChatBubbleOvalLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="CheckBadge" icon="heroicons:check-badge">
		<Solid.CheckBadge class={className} />
	</Hst.Variant>
	<Hst.Variant title="CheckCircle" icon="heroicons:check-circle">
		<Solid.CheckCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Check" icon="heroicons:check">
		<Solid.Check class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleDown" icon="heroicons:chevron-double-down">
		<Solid.ChevronDoubleDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleLeft" icon="heroicons:chevron-double-left">
		<Solid.ChevronDoubleLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleRight" icon="heroicons:chevron-double-right">
		<Solid.ChevronDoubleRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleUp" icon="heroicons:chevron-double-up">
		<Solid.ChevronDoubleUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDown" icon="heroicons:chevron-down">
		<Solid.ChevronDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronLeft" icon="heroicons:chevron-left">
		<Solid.ChevronLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronRight" icon="heroicons:chevron-right">
		<Solid.ChevronRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronUpDown" icon="heroicons:chevron-up-down">
		<Solid.ChevronUpDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronUp" icon="heroicons:chevron-up">
		<Solid.ChevronUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="CircleStack" icon="heroicons:circle-stack">
		<Solid.CircleStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocumentCheck" icon="heroicons:clipboard-document-check">
		<Solid.ClipboardDocumentCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocumentList" icon="heroicons:clipboard-document-list">
		<Solid.ClipboardDocumentList class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocument" icon="heroicons:clipboard-document">
		<Solid.ClipboardDocument class={className} />
	</Hst.Variant>
	<Hst.Variant title="Clipboard" icon="heroicons:clipboard">
		<Solid.Clipboard class={className} />
	</Hst.Variant>
	<Hst.Variant title="Clock" icon="heroicons:clock">
		<Solid.Clock class={className} />
	</Hst.Variant>
	<Hst.Variant title="CloudArrowDown" icon="heroicons:cloud-arrow-down">
		<Solid.CloudArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="CloudArrowUp" icon="heroicons:cloud-arrow-up">
		<Solid.CloudArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cloud" icon="heroicons:cloud">
		<Solid.Cloud class={className} />
	</Hst.Variant>
	<Hst.Variant title="CodeBracketSquare" icon="heroicons:code-bracket-square">
		<Solid.CodeBracketSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="CodeBracket" icon="heroicons:code-bracket">
		<Solid.CodeBracket class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog6Tooth" icon="heroicons:cog-6-tooth">
		<Solid.Cog6Tooth class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog8Tooth" icon="heroicons:cog-8-tooth">
		<Solid.Cog8Tooth class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog" icon="heroicons:cog">
		<Solid.Cog class={className} />
	</Hst.Variant>
	<Hst.Variant title="CommandLine" icon="heroicons:command-line">
		<Solid.CommandLine class={className} />
	</Hst.Variant>
	<Hst.Variant title="ComputerDesktop" icon="heroicons:computer-desktop">
		<Solid.ComputerDesktop class={className} />
	</Hst.Variant>
	<Hst.Variant title="CpuChip" icon="heroicons:cpu-chip">
		<Solid.CpuChip class={className} />
	</Hst.Variant>
	<Hst.Variant title="CreditCard" icon="heroicons:credit-card">
		<Solid.CreditCard class={className} />
	</Hst.Variant>
	<Hst.Variant title="CubeTransparent" icon="heroicons:cube-transparent">
		<Solid.CubeTransparent class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cube" icon="heroicons:cube">
		<Solid.Cube class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyBangladeshi" icon="heroicons:currency-bangladeshi">
		<Solid.CurrencyBangladeshi class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyDollar" icon="heroicons:currency-dollar">
		<Solid.CurrencyDollar class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyEuro" icon="heroicons:currency-euro">
		<Solid.CurrencyEuro class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyPound" icon="heroicons:currency-pound">
		<Solid.CurrencyPound class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyRupee" icon="heroicons:currency-rupee">
		<Solid.CurrencyRupee class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyYen" icon="heroicons:currency-yen">
		<Solid.CurrencyYen class={className} />
	</Hst.Variant>
	<Hst.Variant title="CursorArrowRays" icon="heroicons:cursor-arrow-rays">
		<Solid.CursorArrowRays class={className} />
	</Hst.Variant>
	<Hst.Variant title="CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
		<Solid.CursorArrowRipple class={className} />
	</Hst.Variant>
	<Hst.Variant title="DevicePhoneMobile" icon="heroicons:device-phone-mobile">
		<Solid.DevicePhoneMobile class={className} />
	</Hst.Variant>
	<Hst.Variant title="DeviceTablet" icon="heroicons:device-tablet">
		<Solid.DeviceTablet class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentArrowDown" icon="heroicons:document-arrow-down">
		<Solid.DocumentArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentArrowUp" icon="heroicons:document-arrow-up">
		<Solid.DocumentArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentChartBar" icon="heroicons:document-chart-bar">
		<Solid.DocumentChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentCheck" icon="heroicons:document-check">
		<Solid.DocumentCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentDuplicate" icon="heroicons:document-duplicate">
		<Solid.DocumentDuplicate class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentMagnifyingGlass" icon="heroicons:document-magnifying-glass">
		<Solid.DocumentMagnifyingGlass class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentMinus" icon="heroicons:document-minus">
		<Solid.DocumentMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentPlus" icon="heroicons:document-plus">
		<Solid.DocumentPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentText" icon="heroicons:document-text">
		<Solid.DocumentText class={className} />
	</Hst.Variant>
	<Hst.Variant title="Document" icon="heroicons:document">
		<Solid.Document class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisHorizontalCircle" icon="heroicons:ellipsis-horizontal-circle">
		<Solid.EllipsisHorizontalCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
		<Solid.EllipsisHorizontal class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisVertical" icon="heroicons:ellipsis-vertical">
		<Solid.EllipsisVertical class={className} />
	</Hst.Variant>
	<Hst.Variant title="EnvelopeOpen" icon="heroicons:envelope-open">
		<Solid.EnvelopeOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="Envelope" icon="heroicons:envelope">
		<Solid.Envelope class={className} />
	</Hst.Variant>
	<Hst.Variant title="ExclamationCircle" icon="heroicons:exclamation-circle">
		<Solid.ExclamationCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ExclamationTriangle" icon="heroicons:exclamation-triangle">
		<Solid.ExclamationTriangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="EyeDropper" icon="heroicons:eye-dropper">
		<Solid.EyeDropper class={className} />
	</Hst.Variant>
	<Hst.Variant title="EyeSlash" icon="heroicons:eye-slash">
		<Solid.EyeSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Eye" icon="heroicons:eye">
		<Solid.Eye class={className} />
	</Hst.Variant>
	<Hst.Variant title="FaceFrown" icon="heroicons:face-frown">
		<Solid.FaceFrown class={className} />
	</Hst.Variant>
	<Hst.Variant title="FaceSmile" icon="heroicons:face-smile">
		<Solid.FaceSmile class={className} />
	</Hst.Variant>
	<Hst.Variant title="Film" icon="heroicons:film">
		<Solid.Film class={className} />
	</Hst.Variant>
	<Hst.Variant title="FingerPrint" icon="heroicons:finger-print">
		<Solid.FingerPrint class={className} />
	</Hst.Variant>
	<Hst.Variant title="Fire" icon="heroicons:fire">
		<Solid.Fire class={className} />
	</Hst.Variant>
	<Hst.Variant title="Flag" icon="heroicons:flag">
		<Solid.Flag class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderArrowDown" icon="heroicons:folder-arrow-down">
		<Solid.FolderArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderMinus" icon="heroicons:folder-minus">
		<Solid.FolderMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderOpen" icon="heroicons:folder-open">
		<Solid.FolderOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderPlus" icon="heroicons:folder-plus">
		<Solid.FolderPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Folder" icon="heroicons:folder">
		<Solid.Folder class={className} />
	</Hst.Variant>
	<Hst.Variant title="Forward" icon="heroicons:forward">
		<Solid.Forward class={className} />
	</Hst.Variant>
	<Hst.Variant title="Funnel" icon="heroicons:funnel">
		<Solid.Funnel class={className} />
	</Hst.Variant>
	<Hst.Variant title="Gif" icon="heroicons:gif">
		<Solid.Gif class={className} />
	</Hst.Variant>
	<Hst.Variant title="GiftTop" icon="heroicons:gift-top">
		<Solid.GiftTop class={className} />
	</Hst.Variant>
	<Hst.Variant title="Gift" icon="heroicons:gift">
		<Solid.Gift class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAlt" icon="heroicons:globe-alt">
		<Solid.GlobeAlt class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAmericas" icon="heroicons:globe-americas">
		<Solid.GlobeAmericas class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAsiaAustralia" icon="heroicons:globe-asia-australia">
		<Solid.GlobeAsiaAustralia class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
		<Solid.GlobeEuropeAfrica class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandRaised" icon="heroicons:hand-raised">
		<Solid.HandRaised class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandThumbDown" icon="heroicons:hand-thumb-down">
		<Solid.HandThumbDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandThumbUp" icon="heroicons:hand-thumb-up">
		<Solid.HandThumbUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Hashtag" icon="heroicons:hashtag">
		<Solid.Hashtag class={className} />
	</Hst.Variant>
	<Hst.Variant title="Heart" icon="heroicons:heart">
		<Solid.Heart class={className} />
	</Hst.Variant>
	<Hst.Variant title="HomeModern" icon="heroicons:home-modern">
		<Solid.HomeModern class={className} />
	</Hst.Variant>
	<Hst.Variant title="Home" icon="heroicons:home">
		<Solid.Home class={className} />
	</Hst.Variant>
	<Hst.Variant title="Identification" icon="heroicons:identification">
		<Solid.Identification class={className} />
	</Hst.Variant>
	<Hst.Variant title="InboxArrowDown" icon="heroicons:inbox-arrow-down">
		<Solid.InboxArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="InboxStack" icon="heroicons:inbox-stack">
		<Solid.InboxStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Inbox" icon="heroicons:inbox">
		<Solid.Inbox class={className} />
	</Hst.Variant>
	<Hst.Variant title="InformationCircle" icon="heroicons:information-circle">
		<Solid.InformationCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Key" icon="heroicons:key">
		<Solid.Key class={className} />
	</Hst.Variant>
	<Hst.Variant title="Language" icon="heroicons:language">
		<Solid.Language class={className} />
	</Hst.Variant>
	<Hst.Variant title="Lifebuoy" icon="heroicons:lifebuoy">
		<Solid.Lifebuoy class={className} />
	</Hst.Variant>
	<Hst.Variant title="LightBulb" icon="heroicons:light-bulb">
		<Solid.LightBulb class={className} />
	</Hst.Variant>
	<Hst.Variant title="Link" icon="heroicons:link">
		<Solid.Link class={className} />
	</Hst.Variant>
	<Hst.Variant title="ListBullet" icon="heroicons:list-bullet">
		<Solid.ListBullet class={className} />
	</Hst.Variant>
	<Hst.Variant title="LockClosed" icon="heroicons:lock-closed">
		<Solid.LockClosed class={className} />
	</Hst.Variant>
	<Hst.Variant title="LockOpen" icon="heroicons:lock-open">
		<Solid.LockOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassCircle" icon="heroicons:magnifying-glass-circle">
		<Solid.MagnifyingGlassCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassMinus" icon="heroicons:magnifying-glass-minus">
		<Solid.MagnifyingGlassMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
		<Solid.MagnifyingGlassPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlass" icon="heroicons:magnifying-glass">
		<Solid.MagnifyingGlass class={className} />
	</Hst.Variant>
	<Hst.Variant title="MapPin" icon="heroicons:map-pin">
		<Solid.MapPin class={className} />
	</Hst.Variant>
	<Hst.Variant title="Map" icon="heroicons:map">
		<Solid.Map class={className} />
	</Hst.Variant>
	<Hst.Variant title="Megaphone" icon="heroicons:megaphone">
		<Solid.Megaphone class={className} />
	</Hst.Variant>
	<Hst.Variant title="Microphone" icon="heroicons:microphone">
		<Solid.Microphone class={className} />
	</Hst.Variant>
	<Hst.Variant title="MinusCircle" icon="heroicons:minus-circle">
		<Solid.MinusCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="MinusSmall" icon="heroicons:minus-small">
		<Solid.MinusSmall class={className} />
	</Hst.Variant>
	<Hst.Variant title="Minus" icon="heroicons:minus">
		<Solid.Minus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Moon" icon="heroicons:moon">
		<Solid.Moon class={className} />
	</Hst.Variant>
	<Hst.Variant title="MusicalNote" icon="heroicons:musical-note">
		<Solid.MusicalNote class={className} />
	</Hst.Variant>
	<Hst.Variant title="Newspaper" icon="heroicons:newspaper">
		<Solid.Newspaper class={className} />
	</Hst.Variant>
	<Hst.Variant title="NoSymbol" icon="heroicons:no-symbol">
		<Solid.NoSymbol class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaintBrush" icon="heroicons:paint-brush">
		<Solid.PaintBrush class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaperAirplane" icon="heroicons:paper-airplane">
		<Solid.PaperAirplane class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaperClip" icon="heroicons:paper-clip">
		<Solid.PaperClip class={className} />
	</Hst.Variant>
	<Hst.Variant title="PauseCircle" icon="heroicons:pause-circle">
		<Solid.PauseCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Pause" icon="heroicons:pause">
		<Solid.Pause class={className} />
	</Hst.Variant>
	<Hst.Variant title="PencilSquare" icon="heroicons:pencil-square">
		<Solid.PencilSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="Pencil" icon="heroicons:pencil">
		<Solid.Pencil class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
		<Solid.PhoneArrowDownLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
		<Solid.PhoneArrowUpRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneXMark" icon="heroicons:phone-x-mark">
		<Solid.PhoneXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Phone" icon="heroicons:phone">
		<Solid.Phone class={className} />
	</Hst.Variant>
	<Hst.Variant title="Photo" icon="heroicons:photo">
		<Solid.Photo class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlayCircle" icon="heroicons:play-circle">
		<Solid.PlayCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlayPause" icon="heroicons:play-pause">
		<Solid.PlayPause class={className} />
	</Hst.Variant>
	<Hst.Variant title="Play" icon="heroicons:play">
		<Solid.Play class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlusCircle" icon="heroicons:plus-circle">
		<Solid.PlusCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlusSmall" icon="heroicons:plus-small">
		<Solid.PlusSmall class={className} />
	</Hst.Variant>
	<Hst.Variant title="Plus" icon="heroicons:plus">
		<Solid.Plus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Power" icon="heroicons:power">
		<Solid.Power class={className} />
	</Hst.Variant>
	<Hst.Variant title="PresentationChartBar" icon="heroicons:presentation-chart-bar">
		<Solid.PresentationChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="PresentationChartLine" icon="heroicons:presentation-chart-line">
		<Solid.PresentationChartLine class={className} />
	</Hst.Variant>
	<Hst.Variant title="Printer" icon="heroicons:printer">
		<Solid.Printer class={className} />
	</Hst.Variant>
	<Hst.Variant title="PuzzlePiece" icon="heroicons:puzzle-piece">
		<Solid.PuzzlePiece class={className} />
	</Hst.Variant>
	<Hst.Variant title="QrCode" icon="heroicons:qr-code">
		<Solid.QrCode class={className} />
	</Hst.Variant>
	<Hst.Variant title="QuestionMarkCircle" icon="heroicons:question-mark-circle">
		<Solid.QuestionMarkCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="QueueList" icon="heroicons:queue-list">
		<Solid.QueueList class={className} />
	</Hst.Variant>
	<Hst.Variant title="Radio" icon="heroicons:radio">
		<Solid.Radio class={className} />
	</Hst.Variant>
	<Hst.Variant title="ReceiptPercent" icon="heroicons:receipt-percent">
		<Solid.ReceiptPercent class={className} />
	</Hst.Variant>
	<Hst.Variant title="ReceiptRefund" icon="heroicons:receipt-refund">
		<Solid.ReceiptRefund class={className} />
	</Hst.Variant>
	<Hst.Variant title="RectangleGroup" icon="heroicons:rectangle-group">
		<Solid.RectangleGroup class={className} />
	</Hst.Variant>
	<Hst.Variant title="RectangleStack" icon="heroicons:rectangle-stack">
		<Solid.RectangleStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="RocketLaunch" icon="heroicons:rocket-launch">
		<Solid.RocketLaunch class={className} />
	</Hst.Variant>
	<Hst.Variant title="Rss" icon="heroicons:rss">
		<Solid.Rss class={className} />
	</Hst.Variant>
	<Hst.Variant title="Scale" icon="heroicons:scale">
		<Solid.Scale class={className} />
	</Hst.Variant>
	<Hst.Variant title="Scissors" icon="heroicons:scissors">
		<Solid.Scissors class={className} />
	</Hst.Variant>
	<Hst.Variant title="ServerStack" icon="heroicons:server-stack">
		<Solid.ServerStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Server" icon="heroicons:server">
		<Solid.Server class={className} />
	</Hst.Variant>
	<Hst.Variant title="Share" icon="heroicons:share">
		<Solid.Share class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShieldCheck" icon="heroicons:shield-check">
		<Solid.ShieldCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShieldExclamation" icon="heroicons:shield-exclamation">
		<Solid.ShieldExclamation class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShoppingBag" icon="heroicons:shopping-bag">
		<Solid.ShoppingBag class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShoppingCart" icon="heroicons:shopping-cart">
		<Solid.ShoppingCart class={className} />
	</Hst.Variant>
	<Hst.Variant title="SignalSlash" icon="heroicons:signal-slash">
		<Solid.SignalSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Signal" icon="heroicons:signal">
		<Solid.Signal class={className} />
	</Hst.Variant>
	<Hst.Variant title="Sparkles" icon="heroicons:sparkles">
		<Solid.Sparkles class={className} />
	</Hst.Variant>
	<Hst.Variant title="SpeakerWave" icon="heroicons:speaker-wave">
		<Solid.SpeakerWave class={className} />
	</Hst.Variant>
	<Hst.Variant title="SpeakerXMark" icon="heroicons:speaker-x-mark">
		<Solid.SpeakerXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Square2Stack" icon="heroicons:square-2-stack">
		<Solid.Square2Stack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Square3Stack3d" icon="heroicons:square-3-stack-3d">
		<Solid.Square3Stack3d class={className} />
	</Hst.Variant>
	<Hst.Variant title="Squares2x2" icon="heroicons:squares-2x2">
		<Solid.Squares2x2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="SquaresPlus" icon="heroicons:squares-plus">
		<Solid.SquaresPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Star" icon="heroicons:star">
		<Solid.Star class={className} />
	</Hst.Variant>
	<Hst.Variant title="StopCircle" icon="heroicons:stop-circle">
		<Solid.StopCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Stop" icon="heroicons:stop">
		<Solid.Stop class={className} />
	</Hst.Variant>
	<Hst.Variant title="Sun" icon="heroicons:sun">
		<Solid.Sun class={className} />
	</Hst.Variant>
	<Hst.Variant title="Swatch" icon="heroicons:swatch">
		<Solid.Swatch class={className} />
	</Hst.Variant>
	<Hst.Variant title="TableCells" icon="heroicons:table-cells">
		<Solid.TableCells class={className} />
	</Hst.Variant>
	<Hst.Variant title="Tag" icon="heroicons:tag">
		<Solid.Tag class={className} />
	</Hst.Variant>
	<Hst.Variant title="Ticket" icon="heroicons:ticket">
		<Solid.Ticket class={className} />
	</Hst.Variant>
	<Hst.Variant title="Trash" icon="heroicons:trash">
		<Solid.Trash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Trophy" icon="heroicons:trophy">
		<Solid.Trophy class={className} />
	</Hst.Variant>
	<Hst.Variant title="Truck" icon="heroicons:truck">
		<Solid.Truck class={className} />
	</Hst.Variant>
	<Hst.Variant title="Tv" icon="heroicons:tv">
		<Solid.Tv class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserCircle" icon="heroicons:user-circle">
		<Solid.UserCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserGroup" icon="heroicons:user-group">
		<Solid.UserGroup class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserMinus" icon="heroicons:user-minus">
		<Solid.UserMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserPlus" icon="heroicons:user-plus">
		<Solid.UserPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="User" icon="heroicons:user">
		<Solid.User class={className} />
	</Hst.Variant>
	<Hst.Variant title="Users" icon="heroicons:users">
		<Solid.Users class={className} />
	</Hst.Variant>
	<Hst.Variant title="Variable" icon="heroicons:variable">
		<Solid.Variable class={className} />
	</Hst.Variant>
	<Hst.Variant title="VideoCameraSlash" icon="heroicons:video-camera-slash">
		<Solid.VideoCameraSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="VideoCamera" icon="heroicons:video-camera">
		<Solid.VideoCamera class={className} />
	</Hst.Variant>
	<Hst.Variant title="ViewColumns" icon="heroicons:view-columns">
		<Solid.ViewColumns class={className} />
	</Hst.Variant>
	<Hst.Variant title="ViewfinderCircle" icon="heroicons:viewfinder-circle">
		<Solid.ViewfinderCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wallet" icon="heroicons:wallet">
		<Solid.Wallet class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wifi" icon="heroicons:wifi">
		<Solid.Wifi class={className} />
	</Hst.Variant>
	<Hst.Variant title="Window" icon="heroicons:window">
		<Solid.Window class={className} />
	</Hst.Variant>
	<Hst.Variant title="WrenchScrewdriver" icon="heroicons:wrench-screwdriver">
		<Solid.WrenchScrewdriver class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wrench" icon="heroicons:wrench">
		<Solid.Wrench class={className} />
	</Hst.Variant>
	<Hst.Variant title="XCircle" icon="heroicons:x-circle">
		<Solid.XCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="XMark" icon="heroicons:x-mark">
		<Solid.XMark class={className} />
	</Hst.Variant>
</Hst.Story>
