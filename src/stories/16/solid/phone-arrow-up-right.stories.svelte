<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowUpRightSvelte from '../../../lib/16/solid/phone-arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PhoneArrowUpRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PhoneArrowUpRight" />
