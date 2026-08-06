<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSlashSvelte from '../../../lib/24/solid/link-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LinkSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="LinkSlash" />
