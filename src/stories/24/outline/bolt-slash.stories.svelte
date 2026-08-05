<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoltSlashSvelte from '../../../lib/24/outline/bolt-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BoltSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="BoltSlash" />
