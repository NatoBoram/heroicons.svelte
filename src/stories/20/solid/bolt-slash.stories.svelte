<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSlashSvelte from '../../../lib/20/solid/bolt-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BoltSlashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BoltSlash" />
