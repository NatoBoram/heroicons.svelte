<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSlashSvelte from '../../../lib/24/solid/bolt-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BoltSlashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BoltSlash" />
