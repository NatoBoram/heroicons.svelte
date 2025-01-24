<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSlashSvelte from '../../../lib/20/solid/bell-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BellSlashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BellSlash" />
