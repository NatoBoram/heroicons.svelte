<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSlashSvelte from '../../../lib/20/solid/bolt-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BoltSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="BoltSlash" />
