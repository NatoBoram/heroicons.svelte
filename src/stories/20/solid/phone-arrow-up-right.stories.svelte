<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowUpRightSvelte from '../../../lib/20/solid/phone-arrow-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PhoneArrowUpRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="PhoneArrowUpRight" />
