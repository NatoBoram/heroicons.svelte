<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowUpRightSvelte from '../../../lib/24/outline/phone-arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PhoneArrowUpRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PhoneArrowUpRight" />
