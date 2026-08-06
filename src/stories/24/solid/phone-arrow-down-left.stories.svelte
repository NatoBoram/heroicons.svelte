<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowDownLeftSvelte from '../../../lib/24/solid/phone-arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PhoneArrowDownLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="PhoneArrowDownLeft" />
