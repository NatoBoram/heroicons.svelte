<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowUpRightSvelte from '../../../lib/24/solid/phone-arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PhoneArrowUpRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PhoneArrowUpRight" />
