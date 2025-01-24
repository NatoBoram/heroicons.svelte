<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowUpSvelte from '../../../lib/24/outline/cloud-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CloudArrowUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CloudArrowUp" />
