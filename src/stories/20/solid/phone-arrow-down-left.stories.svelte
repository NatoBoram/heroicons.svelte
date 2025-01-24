<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneArrowDownLeftSvelte from '../../../lib/20/solid/phone-arrow-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PhoneArrowDownLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PhoneArrowDownLeft" />
