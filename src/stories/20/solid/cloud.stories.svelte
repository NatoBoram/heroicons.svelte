<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudSvelte from '../../../lib/20/solid/cloud.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CloudSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Cloud" />
