<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowUpRightSvelte from '../../../lib/24/solid/phone-arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PhoneArrowUpRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="PhoneArrowUpRight" />
