<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudSvelte from '../../../lib/24/solid/cloud.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CloudSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cloud" />
