<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowUpSvelte from '../../../lib/16/solid/cloud-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CloudArrowUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CloudArrowUp" />
