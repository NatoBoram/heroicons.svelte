<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Mini } from '../lib'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/README" layout={{ type: 'grid' }} icon="octicon:book-16">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AcademicCap" icon="heroicons:academic-cap">
		<Mini.AcademicCap class={className} />
	</Hst.Variant>
	<Hst.Variant title="AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
		<Mini.AdjustmentsHorizontal class={className} />
	</Hst.Variant>
	<Hst.Variant title="AdjustmentsVertical" icon="heroicons:adjustments-vertical">
		<Mini.AdjustmentsVertical class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBoxArrowDown" icon="heroicons:archive-box-arrow-down">
		<Mini.ArchiveBoxArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
		<Mini.ArchiveBoxXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArchiveBox" icon="heroicons:archive-box">
		<Mini.ArchiveBox class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownCircle" icon="heroicons:arrow-down-circle">
		<Mini.ArrowDownCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownLeft" icon="heroicons:arrow-down-left">
		<Mini.ArrowDownLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownOnSquareStack" icon="heroicons:arrow-down-on-square-stack">
		<Mini.ArrowDownOnSquareStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownOnSquare" icon="heroicons:arrow-down-on-square">
		<Mini.ArrowDownOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownRight" icon="heroicons:arrow-down-right">
		<Mini.ArrowDownRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDownTray" icon="heroicons:arrow-down-tray">
		<Mini.ArrowDownTray class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowDown" icon="heroicons:arrow-down">
		<Mini.ArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeftCircle" icon="heroicons:arrow-left-circle">
		<Mini.ArrowLeftCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
		<Mini.ArrowLeftOnRectangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLeft" icon="heroicons:arrow-left">
		<Mini.ArrowLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongDown" icon="heroicons:arrow-long-down">
		<Mini.ArrowLongDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongLeft" icon="heroicons:arrow-long-left">
		<Mini.ArrowLongLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongRight" icon="heroicons:arrow-long-right">
		<Mini.ArrowLongRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowLongUp" icon="heroicons:arrow-long-up">
		<Mini.ArrowLongUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowPathRoundedSquare" icon="heroicons:arrow-path-rounded-square">
		<Mini.ArrowPathRoundedSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowPath" icon="heroicons:arrow-path">
		<Mini.ArrowPath class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRightCircle" icon="heroicons:arrow-right-circle">
		<Mini.ArrowRightCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRightOnRectangle" icon="heroicons:arrow-right-on-rectangle">
		<Mini.ArrowRightOnRectangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowRight" icon="heroicons:arrow-right">
		<Mini.ArrowRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallDown" icon="heroicons:arrow-small-down">
		<Mini.ArrowSmallDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallLeft" icon="heroicons:arrow-small-left">
		<Mini.ArrowSmallLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallRight" icon="heroicons:arrow-small-right">
		<Mini.ArrowSmallRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowSmallUp" icon="heroicons:arrow-small-up">
		<Mini.ArrowSmallUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
		<Mini.ArrowTopRightOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTrendingDown" icon="heroicons:arrow-trending-down">
		<Mini.ArrowTrendingDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowTrendingUp" icon="heroicons:arrow-trending-up">
		<Mini.ArrowTrendingUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpCircle" icon="heroicons:arrow-up-circle">
		<Mini.ArrowUpCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpLeft" icon="heroicons:arrow-up-left">
		<Mini.ArrowUpLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpOnSquareStack" icon="heroicons:arrow-up-on-square-stack">
		<Mini.ArrowUpOnSquareStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
		<Mini.ArrowUpOnSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpRight" icon="heroicons:arrow-up-right">
		<Mini.ArrowUpRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUpTray" icon="heroicons:arrow-up-tray">
		<Mini.ArrowUpTray class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUp" icon="heroicons:arrow-up">
		<Mini.ArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnDown" icon="heroicons:arrow-uturn-down">
		<Mini.ArrowUturnDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnLeft" icon="heroicons:arrow-uturn-left">
		<Mini.ArrowUturnLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnRight" icon="heroicons:arrow-uturn-right">
		<Mini.ArrowUturnRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowUturnUp" icon="heroicons:arrow-uturn-up">
		<Mini.ArrowUturnUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsPointingIn" icon="heroicons:arrows-pointing-in">
		<Mini.ArrowsPointingIn class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsPointingOut" icon="heroicons:arrows-pointing-out">
		<Mini.ArrowsPointingOut class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsRightLeft" icon="heroicons:arrows-right-left">
		<Mini.ArrowsRightLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ArrowsUpDown" icon="heroicons:arrows-up-down">
		<Mini.ArrowsUpDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="AtSymbol" icon="heroicons:at-symbol">
		<Mini.AtSymbol class={className} />
	</Hst.Variant>
	<Hst.Variant title="Backspace" icon="heroicons:backspace">
		<Mini.Backspace class={className} />
	</Hst.Variant>
	<Hst.Variant title="Backward" icon="heroicons:backward">
		<Mini.Backward class={className} />
	</Hst.Variant>
	<Hst.Variant title="Banknotes" icon="heroicons:banknotes">
		<Mini.Banknotes class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars2" icon="heroicons:bars-2">
		<Mini.Bars2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
		<Mini.Bars3BottomLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3BottomRight" icon="heroicons:bars-3-bottom-right">
		<Mini.Bars3BottomRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3CenterLeft" icon="heroicons:bars-3-center-left">
		<Mini.Bars3CenterLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars3" icon="heroicons:bars-3">
		<Mini.Bars3 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bars4" icon="heroicons:bars-4">
		<Mini.Bars4 class={className} />
	</Hst.Variant>
	<Hst.Variant title="BarsArrowDown" icon="heroicons:bars-arrow-down">
		<Mini.BarsArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="BarsArrowUp" icon="heroicons:bars-arrow-up">
		<Mini.BarsArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery0" icon="heroicons:battery-0">
		<Mini.Battery0 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery100" icon="heroicons:battery-100">
		<Mini.Battery100 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Battery50" icon="heroicons:battery-50">
		<Mini.Battery50 class={className} />
	</Hst.Variant>
	<Hst.Variant title="Beaker" icon="heroicons:beaker">
		<Mini.Beaker class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellAlert" icon="heroicons:bell-alert">
		<Mini.BellAlert class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellSlash" icon="heroicons:bell-slash">
		<Mini.BellSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="BellSnooze" icon="heroicons:bell-snooze">
		<Mini.BellSnooze class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bell" icon="heroicons:bell">
		<Mini.Bell class={className} />
	</Hst.Variant>
	<Hst.Variant title="BoltSlash" icon="heroicons:bolt-slash">
		<Mini.BoltSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bolt" icon="heroicons:bolt">
		<Mini.Bolt class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookOpen" icon="heroicons:book-open">
		<Mini.BookOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookmarkSlash" icon="heroicons:bookmark-slash">
		<Mini.BookmarkSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="BookmarkSquare" icon="heroicons:bookmark-square">
		<Mini.BookmarkSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="Bookmark" icon="heroicons:bookmark">
		<Mini.Bookmark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Briefcase" icon="heroicons:briefcase">
		<Mini.Briefcase class={className} />
	</Hst.Variant>
	<Hst.Variant title="BugAnt" icon="heroicons:bug-ant">
		<Mini.BugAnt class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingLibrary" icon="heroicons:building-library">
		<Mini.BuildingLibrary class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingOffice2" icon="heroicons:building-office-2">
		<Mini.BuildingOffice2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingOffice" icon="heroicons:building-office">
		<Mini.BuildingOffice class={className} />
	</Hst.Variant>
	<Hst.Variant title="BuildingStorefront" icon="heroicons:building-storefront">
		<Mini.BuildingStorefront class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cake" icon="heroicons:cake">
		<Mini.Cake class={className} />
	</Hst.Variant>
	<Hst.Variant title="Calculator" icon="heroicons:calculator">
		<Mini.Calculator class={className} />
	</Hst.Variant>
	<Hst.Variant title="CalendarDays" icon="heroicons:calendar-days">
		<Mini.CalendarDays class={className} />
	</Hst.Variant>
	<Hst.Variant title="Calendar" icon="heroicons:calendar">
		<Mini.Calendar class={className} />
	</Hst.Variant>
	<Hst.Variant title="Camera" icon="heroicons:camera">
		<Mini.Camera class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartBarSquare" icon="heroicons:chart-bar-square">
		<Mini.ChartBarSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartBar" icon="heroicons:chart-bar">
		<Mini.ChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChartPie" icon="heroicons:chart-pie">
		<Mini.ChartPie class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleBottomCenterText" icon="heroicons:chat-bubble-bottom-center-text">
		<Mini.ChatBubbleBottomCenterText class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleBottomCenter" icon="heroicons:chat-bubble-bottom-center">
		<Mini.ChatBubbleBottomCenter class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeftEllipsis" icon="heroicons:chat-bubble-left-ellipsis">
		<Mini.ChatBubbleLeftEllipsis class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeftRight" icon="heroicons:chat-bubble-left-right">
		<Mini.ChatBubbleLeftRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleLeft" icon="heroicons:chat-bubble-left">
		<Mini.ChatBubbleLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleOvalLeftEllipsis" icon="heroicons:chat-bubble-oval-left-ellipsis">
		<Mini.ChatBubbleOvalLeftEllipsis class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
		<Mini.ChatBubbleOvalLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="CheckBadge" icon="heroicons:check-badge">
		<Mini.CheckBadge class={className} />
	</Hst.Variant>
	<Hst.Variant title="CheckCircle" icon="heroicons:check-circle">
		<Mini.CheckCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Check" icon="heroicons:check">
		<Mini.Check class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleDown" icon="heroicons:chevron-double-down">
		<Mini.ChevronDoubleDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleLeft" icon="heroicons:chevron-double-left">
		<Mini.ChevronDoubleLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleRight" icon="heroicons:chevron-double-right">
		<Mini.ChevronDoubleRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDoubleUp" icon="heroicons:chevron-double-up">
		<Mini.ChevronDoubleUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronDown" icon="heroicons:chevron-down">
		<Mini.ChevronDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronLeft" icon="heroicons:chevron-left">
		<Mini.ChevronLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronRight" icon="heroicons:chevron-right">
		<Mini.ChevronRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronUpDown" icon="heroicons:chevron-up-down">
		<Mini.ChevronUpDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="ChevronUp" icon="heroicons:chevron-up">
		<Mini.ChevronUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="CircleStack" icon="heroicons:circle-stack">
		<Mini.CircleStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocumentCheck" icon="heroicons:clipboard-document-check">
		<Mini.ClipboardDocumentCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocumentList" icon="heroicons:clipboard-document-list">
		<Mini.ClipboardDocumentList class={className} />
	</Hst.Variant>
	<Hst.Variant title="ClipboardDocument" icon="heroicons:clipboard-document">
		<Mini.ClipboardDocument class={className} />
	</Hst.Variant>
	<Hst.Variant title="Clipboard" icon="heroicons:clipboard">
		<Mini.Clipboard class={className} />
	</Hst.Variant>
	<Hst.Variant title="Clock" icon="heroicons:clock">
		<Mini.Clock class={className} />
	</Hst.Variant>
	<Hst.Variant title="CloudArrowDown" icon="heroicons:cloud-arrow-down">
		<Mini.CloudArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="CloudArrowUp" icon="heroicons:cloud-arrow-up">
		<Mini.CloudArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cloud" icon="heroicons:cloud">
		<Mini.Cloud class={className} />
	</Hst.Variant>
	<Hst.Variant title="CodeBracketSquare" icon="heroicons:code-bracket-square">
		<Mini.CodeBracketSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="CodeBracket" icon="heroicons:code-bracket">
		<Mini.CodeBracket class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog6Tooth" icon="heroicons:cog-6-tooth">
		<Mini.Cog6Tooth class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog8Tooth" icon="heroicons:cog-8-tooth">
		<Mini.Cog8Tooth class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cog" icon="heroicons:cog">
		<Mini.Cog class={className} />
	</Hst.Variant>
	<Hst.Variant title="CommandLine" icon="heroicons:command-line">
		<Mini.CommandLine class={className} />
	</Hst.Variant>
	<Hst.Variant title="ComputerDesktop" icon="heroicons:computer-desktop">
		<Mini.ComputerDesktop class={className} />
	</Hst.Variant>
	<Hst.Variant title="CpuChip" icon="heroicons:cpu-chip">
		<Mini.CpuChip class={className} />
	</Hst.Variant>
	<Hst.Variant title="CreditCard" icon="heroicons:credit-card">
		<Mini.CreditCard class={className} />
	</Hst.Variant>
	<Hst.Variant title="CubeTransparent" icon="heroicons:cube-transparent">
		<Mini.CubeTransparent class={className} />
	</Hst.Variant>
	<Hst.Variant title="Cube" icon="heroicons:cube">
		<Mini.Cube class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyBangladeshi" icon="heroicons:currency-bangladeshi">
		<Mini.CurrencyBangladeshi class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyDollar" icon="heroicons:currency-dollar">
		<Mini.CurrencyDollar class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyEuro" icon="heroicons:currency-euro">
		<Mini.CurrencyEuro class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyPound" icon="heroicons:currency-pound">
		<Mini.CurrencyPound class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyRupee" icon="heroicons:currency-rupee">
		<Mini.CurrencyRupee class={className} />
	</Hst.Variant>
	<Hst.Variant title="CurrencyYen" icon="heroicons:currency-yen">
		<Mini.CurrencyYen class={className} />
	</Hst.Variant>
	<Hst.Variant title="CursorArrowRays" icon="heroicons:cursor-arrow-rays">
		<Mini.CursorArrowRays class={className} />
	</Hst.Variant>
	<Hst.Variant title="CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
		<Mini.CursorArrowRipple class={className} />
	</Hst.Variant>
	<Hst.Variant title="DevicePhoneMobile" icon="heroicons:device-phone-mobile">
		<Mini.DevicePhoneMobile class={className} />
	</Hst.Variant>
	<Hst.Variant title="DeviceTablet" icon="heroicons:device-tablet">
		<Mini.DeviceTablet class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentArrowDown" icon="heroicons:document-arrow-down">
		<Mini.DocumentArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentArrowUp" icon="heroicons:document-arrow-up">
		<Mini.DocumentArrowUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentChartBar" icon="heroicons:document-chart-bar">
		<Mini.DocumentChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentCheck" icon="heroicons:document-check">
		<Mini.DocumentCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentDuplicate" icon="heroicons:document-duplicate">
		<Mini.DocumentDuplicate class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentMagnifyingGlass" icon="heroicons:document-magnifying-glass">
		<Mini.DocumentMagnifyingGlass class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentMinus" icon="heroicons:document-minus">
		<Mini.DocumentMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentPlus" icon="heroicons:document-plus">
		<Mini.DocumentPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="DocumentText" icon="heroicons:document-text">
		<Mini.DocumentText class={className} />
	</Hst.Variant>
	<Hst.Variant title="Document" icon="heroicons:document">
		<Mini.Document class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisHorizontalCircle" icon="heroicons:ellipsis-horizontal-circle">
		<Mini.EllipsisHorizontalCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
		<Mini.EllipsisHorizontal class={className} />
	</Hst.Variant>
	<Hst.Variant title="EllipsisVertical" icon="heroicons:ellipsis-vertical">
		<Mini.EllipsisVertical class={className} />
	</Hst.Variant>
	<Hst.Variant title="EnvelopeOpen" icon="heroicons:envelope-open">
		<Mini.EnvelopeOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="Envelope" icon="heroicons:envelope">
		<Mini.Envelope class={className} />
	</Hst.Variant>
	<Hst.Variant title="ExclamationCircle" icon="heroicons:exclamation-circle">
		<Mini.ExclamationCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="ExclamationTriangle" icon="heroicons:exclamation-triangle">
		<Mini.ExclamationTriangle class={className} />
	</Hst.Variant>
	<Hst.Variant title="EyeDropper" icon="heroicons:eye-dropper">
		<Mini.EyeDropper class={className} />
	</Hst.Variant>
	<Hst.Variant title="EyeSlash" icon="heroicons:eye-slash">
		<Mini.EyeSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Eye" icon="heroicons:eye">
		<Mini.Eye class={className} />
	</Hst.Variant>
	<Hst.Variant title="FaceFrown" icon="heroicons:face-frown">
		<Mini.FaceFrown class={className} />
	</Hst.Variant>
	<Hst.Variant title="FaceSmile" icon="heroicons:face-smile">
		<Mini.FaceSmile class={className} />
	</Hst.Variant>
	<Hst.Variant title="Film" icon="heroicons:film">
		<Mini.Film class={className} />
	</Hst.Variant>
	<Hst.Variant title="FingerPrint" icon="heroicons:finger-print">
		<Mini.FingerPrint class={className} />
	</Hst.Variant>
	<Hst.Variant title="Fire" icon="heroicons:fire">
		<Mini.Fire class={className} />
	</Hst.Variant>
	<Hst.Variant title="Flag" icon="heroicons:flag">
		<Mini.Flag class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderArrowDown" icon="heroicons:folder-arrow-down">
		<Mini.FolderArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderMinus" icon="heroicons:folder-minus">
		<Mini.FolderMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderOpen" icon="heroicons:folder-open">
		<Mini.FolderOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="FolderPlus" icon="heroicons:folder-plus">
		<Mini.FolderPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Folder" icon="heroicons:folder">
		<Mini.Folder class={className} />
	</Hst.Variant>
	<Hst.Variant title="Forward" icon="heroicons:forward">
		<Mini.Forward class={className} />
	</Hst.Variant>
	<Hst.Variant title="Funnel" icon="heroicons:funnel">
		<Mini.Funnel class={className} />
	</Hst.Variant>
	<Hst.Variant title="Gif" icon="heroicons:gif">
		<Mini.Gif class={className} />
	</Hst.Variant>
	<Hst.Variant title="GiftTop" icon="heroicons:gift-top">
		<Mini.GiftTop class={className} />
	</Hst.Variant>
	<Hst.Variant title="Gift" icon="heroicons:gift">
		<Mini.Gift class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAlt" icon="heroicons:globe-alt">
		<Mini.GlobeAlt class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAmericas" icon="heroicons:globe-americas">
		<Mini.GlobeAmericas class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeAsiaAustralia" icon="heroicons:globe-asia-australia">
		<Mini.GlobeAsiaAustralia class={className} />
	</Hst.Variant>
	<Hst.Variant title="GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
		<Mini.GlobeEuropeAfrica class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandRaised" icon="heroicons:hand-raised">
		<Mini.HandRaised class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandThumbDown" icon="heroicons:hand-thumb-down">
		<Mini.HandThumbDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="HandThumbUp" icon="heroicons:hand-thumb-up">
		<Mini.HandThumbUp class={className} />
	</Hst.Variant>
	<Hst.Variant title="Hashtag" icon="heroicons:hashtag">
		<Mini.Hashtag class={className} />
	</Hst.Variant>
	<Hst.Variant title="Heart" icon="heroicons:heart">
		<Mini.Heart class={className} />
	</Hst.Variant>
	<Hst.Variant title="HomeModern" icon="heroicons:home-modern">
		<Mini.HomeModern class={className} />
	</Hst.Variant>
	<Hst.Variant title="Home" icon="heroicons:home">
		<Mini.Home class={className} />
	</Hst.Variant>
	<Hst.Variant title="Identification" icon="heroicons:identification">
		<Mini.Identification class={className} />
	</Hst.Variant>
	<Hst.Variant title="InboxArrowDown" icon="heroicons:inbox-arrow-down">
		<Mini.InboxArrowDown class={className} />
	</Hst.Variant>
	<Hst.Variant title="InboxStack" icon="heroicons:inbox-stack">
		<Mini.InboxStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Inbox" icon="heroicons:inbox">
		<Mini.Inbox class={className} />
	</Hst.Variant>
	<Hst.Variant title="InformationCircle" icon="heroicons:information-circle">
		<Mini.InformationCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Key" icon="heroicons:key">
		<Mini.Key class={className} />
	</Hst.Variant>
	<Hst.Variant title="Language" icon="heroicons:language">
		<Mini.Language class={className} />
	</Hst.Variant>
	<Hst.Variant title="Lifebuoy" icon="heroicons:lifebuoy">
		<Mini.Lifebuoy class={className} />
	</Hst.Variant>
	<Hst.Variant title="LightBulb" icon="heroicons:light-bulb">
		<Mini.LightBulb class={className} />
	</Hst.Variant>
	<Hst.Variant title="Link" icon="heroicons:link">
		<Mini.Link class={className} />
	</Hst.Variant>
	<Hst.Variant title="ListBullet" icon="heroicons:list-bullet">
		<Mini.ListBullet class={className} />
	</Hst.Variant>
	<Hst.Variant title="LockClosed" icon="heroicons:lock-closed">
		<Mini.LockClosed class={className} />
	</Hst.Variant>
	<Hst.Variant title="LockOpen" icon="heroicons:lock-open">
		<Mini.LockOpen class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassCircle" icon="heroicons:magnifying-glass-circle">
		<Mini.MagnifyingGlassCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassMinus" icon="heroicons:magnifying-glass-minus">
		<Mini.MagnifyingGlassMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
		<Mini.MagnifyingGlassPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="MagnifyingGlass" icon="heroicons:magnifying-glass">
		<Mini.MagnifyingGlass class={className} />
	</Hst.Variant>
	<Hst.Variant title="MapPin" icon="heroicons:map-pin">
		<Mini.MapPin class={className} />
	</Hst.Variant>
	<Hst.Variant title="Map" icon="heroicons:map">
		<Mini.Map class={className} />
	</Hst.Variant>
	<Hst.Variant title="Megaphone" icon="heroicons:megaphone">
		<Mini.Megaphone class={className} />
	</Hst.Variant>
	<Hst.Variant title="Microphone" icon="heroicons:microphone">
		<Mini.Microphone class={className} />
	</Hst.Variant>
	<Hst.Variant title="MinusCircle" icon="heroicons:minus-circle">
		<Mini.MinusCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="MinusSmall" icon="heroicons:minus-small">
		<Mini.MinusSmall class={className} />
	</Hst.Variant>
	<Hst.Variant title="Minus" icon="heroicons:minus">
		<Mini.Minus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Moon" icon="heroicons:moon">
		<Mini.Moon class={className} />
	</Hst.Variant>
	<Hst.Variant title="MusicalNote" icon="heroicons:musical-note">
		<Mini.MusicalNote class={className} />
	</Hst.Variant>
	<Hst.Variant title="Newspaper" icon="heroicons:newspaper">
		<Mini.Newspaper class={className} />
	</Hst.Variant>
	<Hst.Variant title="NoSymbol" icon="heroicons:no-symbol">
		<Mini.NoSymbol class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaintBrush" icon="heroicons:paint-brush">
		<Mini.PaintBrush class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaperAirplane" icon="heroicons:paper-airplane">
		<Mini.PaperAirplane class={className} />
	</Hst.Variant>
	<Hst.Variant title="PaperClip" icon="heroicons:paper-clip">
		<Mini.PaperClip class={className} />
	</Hst.Variant>
	<Hst.Variant title="PauseCircle" icon="heroicons:pause-circle">
		<Mini.PauseCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Pause" icon="heroicons:pause">
		<Mini.Pause class={className} />
	</Hst.Variant>
	<Hst.Variant title="PencilSquare" icon="heroicons:pencil-square">
		<Mini.PencilSquare class={className} />
	</Hst.Variant>
	<Hst.Variant title="Pencil" icon="heroicons:pencil">
		<Mini.Pencil class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
		<Mini.PhoneArrowDownLeft class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
		<Mini.PhoneArrowUpRight class={className} />
	</Hst.Variant>
	<Hst.Variant title="PhoneXMark" icon="heroicons:phone-x-mark">
		<Mini.PhoneXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Phone" icon="heroicons:phone">
		<Mini.Phone class={className} />
	</Hst.Variant>
	<Hst.Variant title="Photo" icon="heroicons:photo">
		<Mini.Photo class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlayCircle" icon="heroicons:play-circle">
		<Mini.PlayCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlayPause" icon="heroicons:play-pause">
		<Mini.PlayPause class={className} />
	</Hst.Variant>
	<Hst.Variant title="Play" icon="heroicons:play">
		<Mini.Play class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlusCircle" icon="heroicons:plus-circle">
		<Mini.PlusCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="PlusSmall" icon="heroicons:plus-small">
		<Mini.PlusSmall class={className} />
	</Hst.Variant>
	<Hst.Variant title="Plus" icon="heroicons:plus">
		<Mini.Plus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Power" icon="heroicons:power">
		<Mini.Power class={className} />
	</Hst.Variant>
	<Hst.Variant title="PresentationChartBar" icon="heroicons:presentation-chart-bar">
		<Mini.PresentationChartBar class={className} />
	</Hst.Variant>
	<Hst.Variant title="PresentationChartLine" icon="heroicons:presentation-chart-line">
		<Mini.PresentationChartLine class={className} />
	</Hst.Variant>
	<Hst.Variant title="Printer" icon="heroicons:printer">
		<Mini.Printer class={className} />
	</Hst.Variant>
	<Hst.Variant title="PuzzlePiece" icon="heroicons:puzzle-piece">
		<Mini.PuzzlePiece class={className} />
	</Hst.Variant>
	<Hst.Variant title="QrCode" icon="heroicons:qr-code">
		<Mini.QrCode class={className} />
	</Hst.Variant>
	<Hst.Variant title="QuestionMarkCircle" icon="heroicons:question-mark-circle">
		<Mini.QuestionMarkCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="QueueList" icon="heroicons:queue-list">
		<Mini.QueueList class={className} />
	</Hst.Variant>
	<Hst.Variant title="Radio" icon="heroicons:radio">
		<Mini.Radio class={className} />
	</Hst.Variant>
	<Hst.Variant title="ReceiptPercent" icon="heroicons:receipt-percent">
		<Mini.ReceiptPercent class={className} />
	</Hst.Variant>
	<Hst.Variant title="ReceiptRefund" icon="heroicons:receipt-refund">
		<Mini.ReceiptRefund class={className} />
	</Hst.Variant>
	<Hst.Variant title="RectangleGroup" icon="heroicons:rectangle-group">
		<Mini.RectangleGroup class={className} />
	</Hst.Variant>
	<Hst.Variant title="RectangleStack" icon="heroicons:rectangle-stack">
		<Mini.RectangleStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="RocketLaunch" icon="heroicons:rocket-launch">
		<Mini.RocketLaunch class={className} />
	</Hst.Variant>
	<Hst.Variant title="Rss" icon="heroicons:rss">
		<Mini.Rss class={className} />
	</Hst.Variant>
	<Hst.Variant title="Scale" icon="heroicons:scale">
		<Mini.Scale class={className} />
	</Hst.Variant>
	<Hst.Variant title="Scissors" icon="heroicons:scissors">
		<Mini.Scissors class={className} />
	</Hst.Variant>
	<Hst.Variant title="ServerStack" icon="heroicons:server-stack">
		<Mini.ServerStack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Server" icon="heroicons:server">
		<Mini.Server class={className} />
	</Hst.Variant>
	<Hst.Variant title="Share" icon="heroicons:share">
		<Mini.Share class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShieldCheck" icon="heroicons:shield-check">
		<Mini.ShieldCheck class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShieldExclamation" icon="heroicons:shield-exclamation">
		<Mini.ShieldExclamation class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShoppingBag" icon="heroicons:shopping-bag">
		<Mini.ShoppingBag class={className} />
	</Hst.Variant>
	<Hst.Variant title="ShoppingCart" icon="heroicons:shopping-cart">
		<Mini.ShoppingCart class={className} />
	</Hst.Variant>
	<Hst.Variant title="SignalSlash" icon="heroicons:signal-slash">
		<Mini.SignalSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Signal" icon="heroicons:signal">
		<Mini.Signal class={className} />
	</Hst.Variant>
	<Hst.Variant title="Sparkles" icon="heroicons:sparkles">
		<Mini.Sparkles class={className} />
	</Hst.Variant>
	<Hst.Variant title="SpeakerWave" icon="heroicons:speaker-wave">
		<Mini.SpeakerWave class={className} />
	</Hst.Variant>
	<Hst.Variant title="SpeakerXMark" icon="heroicons:speaker-x-mark">
		<Mini.SpeakerXMark class={className} />
	</Hst.Variant>
	<Hst.Variant title="Square2Stack" icon="heroicons:square-2-stack">
		<Mini.Square2Stack class={className} />
	</Hst.Variant>
	<Hst.Variant title="Square3Stack3d" icon="heroicons:square-3-stack-3d">
		<Mini.Square3Stack3d class={className} />
	</Hst.Variant>
	<Hst.Variant title="Squares2x2" icon="heroicons:squares-2x2">
		<Mini.Squares2x2 class={className} />
	</Hst.Variant>
	<Hst.Variant title="SquaresPlus" icon="heroicons:squares-plus">
		<Mini.SquaresPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="Star" icon="heroicons:star">
		<Mini.Star class={className} />
	</Hst.Variant>
	<Hst.Variant title="StopCircle" icon="heroicons:stop-circle">
		<Mini.StopCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Stop" icon="heroicons:stop">
		<Mini.Stop class={className} />
	</Hst.Variant>
	<Hst.Variant title="Sun" icon="heroicons:sun">
		<Mini.Sun class={className} />
	</Hst.Variant>
	<Hst.Variant title="Swatch" icon="heroicons:swatch">
		<Mini.Swatch class={className} />
	</Hst.Variant>
	<Hst.Variant title="TableCells" icon="heroicons:table-cells">
		<Mini.TableCells class={className} />
	</Hst.Variant>
	<Hst.Variant title="Tag" icon="heroicons:tag">
		<Mini.Tag class={className} />
	</Hst.Variant>
	<Hst.Variant title="Ticket" icon="heroicons:ticket">
		<Mini.Ticket class={className} />
	</Hst.Variant>
	<Hst.Variant title="Trash" icon="heroicons:trash">
		<Mini.Trash class={className} />
	</Hst.Variant>
	<Hst.Variant title="Trophy" icon="heroicons:trophy">
		<Mini.Trophy class={className} />
	</Hst.Variant>
	<Hst.Variant title="Truck" icon="heroicons:truck">
		<Mini.Truck class={className} />
	</Hst.Variant>
	<Hst.Variant title="Tv" icon="heroicons:tv">
		<Mini.Tv class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserCircle" icon="heroicons:user-circle">
		<Mini.UserCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserGroup" icon="heroicons:user-group">
		<Mini.UserGroup class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserMinus" icon="heroicons:user-minus">
		<Mini.UserMinus class={className} />
	</Hst.Variant>
	<Hst.Variant title="UserPlus" icon="heroicons:user-plus">
		<Mini.UserPlus class={className} />
	</Hst.Variant>
	<Hst.Variant title="User" icon="heroicons:user">
		<Mini.User class={className} />
	</Hst.Variant>
	<Hst.Variant title="Users" icon="heroicons:users">
		<Mini.Users class={className} />
	</Hst.Variant>
	<Hst.Variant title="Variable" icon="heroicons:variable">
		<Mini.Variable class={className} />
	</Hst.Variant>
	<Hst.Variant title="VideoCameraSlash" icon="heroicons:video-camera-slash">
		<Mini.VideoCameraSlash class={className} />
	</Hst.Variant>
	<Hst.Variant title="VideoCamera" icon="heroicons:video-camera">
		<Mini.VideoCamera class={className} />
	</Hst.Variant>
	<Hst.Variant title="ViewColumns" icon="heroicons:view-columns">
		<Mini.ViewColumns class={className} />
	</Hst.Variant>
	<Hst.Variant title="ViewfinderCircle" icon="heroicons:viewfinder-circle">
		<Mini.ViewfinderCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wallet" icon="heroicons:wallet">
		<Mini.Wallet class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wifi" icon="heroicons:wifi">
		<Mini.Wifi class={className} />
	</Hst.Variant>
	<Hst.Variant title="Window" icon="heroicons:window">
		<Mini.Window class={className} />
	</Hst.Variant>
	<Hst.Variant title="WrenchScrewdriver" icon="heroicons:wrench-screwdriver">
		<Mini.WrenchScrewdriver class={className} />
	</Hst.Variant>
	<Hst.Variant title="Wrench" icon="heroicons:wrench">
		<Mini.Wrench class={className} />
	</Hst.Variant>
	<Hst.Variant title="XCircle" icon="heroicons:x-circle">
		<Mini.XCircle class={className} />
	</Hst.Variant>
	<Hst.Variant title="XMark" icon="heroicons:x-mark">
		<Mini.XMark class={className} />
	</Hst.Variant>
</Hst.Story>
