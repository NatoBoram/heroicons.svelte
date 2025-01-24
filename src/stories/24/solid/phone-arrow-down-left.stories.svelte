<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowDownLeftSvelte from '../../../lib/24/solid/phone-arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PhoneArrowDownLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PhoneArrowDownLeft" />
