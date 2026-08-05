<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowDownLeftSvelte from '../../../lib/24/outline/phone-arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PhoneArrowDownLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="PhoneArrowDownLeft" />
