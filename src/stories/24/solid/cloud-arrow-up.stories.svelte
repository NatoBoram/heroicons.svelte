<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowUpSvelte from '../../../lib/24/solid/cloud-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CloudArrowUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CloudArrowUp" />
