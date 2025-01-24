<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSlashSvelte from '../../../lib/16/solid/bolt-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BoltSlashSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BoltSlash" />
