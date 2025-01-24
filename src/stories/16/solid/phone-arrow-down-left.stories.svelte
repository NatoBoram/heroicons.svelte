<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowDownLeftSvelte from '../../../lib/16/solid/phone-arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PhoneArrowDownLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PhoneArrowDownLeft" />
